import {
    GithubApiResolvers,
    GithubBranchResolvers,
    GithubCommitAuthor,
    GithubCommitAuthorResolvers,
    GithubCommitResolvers,
    GithubRepoResolvers,
    GithubStatus,
    GithubUser,
    GithubUserResolvers,
} from './types/resolvers';
import { UserContext } from 'pages/api/graphql';

const githubResolver: GithubApiResolvers<UserContext> = {
    user: async (_, { username }, context) => {
        try {
            const authorizedGitHub = context.getAuthorizedGitHub();
            return authorizedGitHub.getUser(username);
        } catch (err) {
            return {};
        }
    },
    repo: (_, { ownerUsername, name }, context) => {
        return context.getAuthorizedGitHub().getRepoForUser(ownerUsername, name);
    },
};

const githubUserResolver: GithubUserResolvers<UserContext> = {
    id: (user) => {
        return String(user.id);
    },
    repos: (user, _args, context) => {
        if (user.login) {
            return context.getAuthorizedGitHub().getReposForUser(user.login);
        }
        return null;
    },
};
const githubCommitAuthorResolver: GithubCommitAuthorResolvers<UserContext> = {
    // email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    // name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

const githubRepoResolver: GithubRepoResolvers<UserContext> = {
    branches: (repo, { limit }, context) => {
        const reponame = repo.name;
        const ownerUsername = repo.owner?.login;
        return context
            .getAuthorizedGitHub()
            .getBranchesForRepo(ownerUsername || '', reponame || '')
            .then((branches) => {
                // add repo referenceData
                return branches.map((b) => ({
                    reponame,
                    ownerUsername,
                    ...b,
                }));
            })
            .then((branches) => {
                if (limit) {
                    return branches.slice(0, limit);
                }
                return branches;
            });
    },
    commits: (repo, _args, context) => {
        const { owner, name } = repo;
        if (!owner?.login || !name) {
            return [];
        }
        return context
            .getAuthorizedGitHub()
            .getCommitsForRepo(owner.login, name)
            .then((commitList) => {
                // fix for the problem that REST response contained an object
                //
                return commitList.slice(0, 1).map((commit) => {
                    return {
                        ...commit,
                        // info is part of REST response:
                        // @ts-expect-error commit is a valid item.
                        message: commit.commit.message,
                        // info is part of REST response:
                        // @ts-expect-error commit is a valid item.
                        date: commit.commit?.committer?.date,
                    };
                });
            });
    },
};

const queryResolver = {
    github: () => {
        return {};
    },
    ...githubResolver,
};

const githubBranchResolver: GithubBranchResolvers<UserContext> = {
    lastCommit: async (branch, _args, context) => {
        // @ts-expect-error
        const { ownerUsername, reponame, commit } = branch; // info has been added while loading
        const { sha } = commit;
        if (!ownerUsername || !reponame) {
            return null;
        }
        return await context.getAuthorizedGitHub().getLastCommit(ownerUsername, reponame, sha);
    },
};

export const commitStatusResolver = (commit, _args, context) => {
    const { sha, ownerUsername, reponame } = commit;
    if (!sha) return [] as Array<GithubStatus>;

    return (
        context.getAuthorizedGitHub().getStatusesForRepo(
            ownerUsername, //username,
            reponame,
            sha
        ) ?? []
    );
};
export const githubCommitResolver: GithubCommitResolvers<UserContext> = {
    status: commitStatusResolver,
    associatedPullRequests: async (commit, _args, context) => {
        // @ts-expect-error
        const { sha, ownerUsername, reponame } = commit;
        if (!sha) {
            return null;
        }
        return context.getAuthorizedGitHub().fetchRepoPullRequestsAssociatedWithCommit(ownerUsername, reponame, sha);
    },
};

export const resolvers = {
    GithubCommit: githubCommitResolver,
    GithubBranch: githubBranchResolver,
    UserOrCommitAuthor: {
        __resolveType: (obj: GithubCommitAuthor | GithubUser) => obj.__typename,
    },
    GithubUser: githubUserResolver,
    GithubCommitAuthor: githubCommitAuthorResolver,
    GithubRepo: githubRepoResolver,
    Query: queryResolver,
    GithubAPI: githubResolver,
};
