import { getAuthorizedGitHub } from 'restinpeace/github';
import { octo } from './github';
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

const githubResolver: GithubApiResolvers = {
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

const githubUserResolver: GithubUserResolvers = {
    id: (user, _args, _context) => {
        return String(user.id);
    },
    repos: (user, _args, _context) => {
        if (user.login) {
            return _context.getAuthorizedGitHub().getReposForUser(user.login);
        }
        return null;
    },
};
const githubCommitAuthorResolver: GithubCommitAuthorResolvers = {
    // email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    // name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

const githubRepoResolver: GithubRepoResolvers = {
    branches: (repo, { limit }, _context) => {
        const reponame = repo.name;
        const ownerUsername = repo.owner?.login;
        return _context.getAuthorizedGitHub()
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
    commits: (repo,_args, _context) => {
        const { owner, name } = repo;
        if (!owner?.login || !name) {
            return [];
        }
        return _context.getAuthorizedGitHub()
            .getCommitsForRepo(owner.login, name)
            .then((commitList) => {
                // fix for the problem that REST response contained an object
                //
                return commitList.slice(0, 1).map((commit) => {
                    return {
                        ...commit,
                        // info is part of REST response:
                        message: commit.commit.message,
                        // info is part of REST response:
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

const githubBranchResolver: GithubBranchResolvers = {
    lastCommit: async (branch,_args, _context) => {
        // @ts-expect-error
        const { ownerUsername, reponame, commit } = branch; // info has been added while loading
        const { sha } = commit;
        if (!ownerUsername || !reponame) {
            return null;
        }
        return await getAuthorizedGitHub(octo).getLastCommit(ownerUsername, reponame, sha);
    },
};

export const commitStatusResolver = (commit,_args, _context) => {
    const { sha, ownerUsername, reponame } = commit;
    if (!sha) return Promise.resolve([] as Array<GithubStatus>);

    return (
        getAuthorizedGitHub(octo).getStatusesForRepo(
            ownerUsername, //username,
            reponame,
            sha
        ) ?? []
    );
};
export const githubCommitResolver: GithubCommitResolvers = {
    status: commitStatusResolver,
    associatedPullRequests: async (commit,_args, _context) => {
        // @ts-expect-error
        const { sha, ownerUsername, reponame } = commit;
        if (!sha) {
            return null;
        }
        const prs = await getAuthorizedGitHub(octo).fetchRepoPullRequestsAssociatedWithCommit(
            ownerUsername,
            reponame,
            sha
        );
        return prs;
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
