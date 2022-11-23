import {
    fetchRepoPullRequestsAssociatedWithCommit,
    getBranchesForRepo,
    getCommitsForRepo,
    getLastCommit,
    getRepoForUser,
    getReposForUser,
    getStatusesForRepo,
    getUser,
} from './github';
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
    user: async (_, { username }) => {
        try {
            return getUser(username);
        } catch (err) {
            return {};
        }
    },
    repo: (_, { ownerUsername, name }) => {
        return getRepoForUser(ownerUsername, name);
    },
};

const githubUserResolver: GithubUserResolvers = {
    id: (user) => {
        return String(user.id);
    },
    repos: (user) => {
        if (user.login) {
            return getReposForUser(user.login);
        }
        return null;
    },
};
const githubCommitAuthorResolver: GithubCommitAuthorResolvers = {
    // email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    // name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

const githubRepoResolver: GithubRepoResolvers = {
    branches: (repo, { limit }) => {
        const reponame = repo.name;
        const ownerUsername = repo.owner?.login;
        return getBranchesForRepo(ownerUsername || '', reponame || '')
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
    commits: (repo) => {
        const { owner, name } = repo;
        if (!owner?.login || !name) {
            return [];
        }
        return getCommitsForRepo(owner.login, name).then((commitList) => {
            // fix for the problem that REST response contained an object
            //
            return commitList.slice(0, 1).map((commit) => {
                return {
                    ...commit,
                    // info is part of REST response:
                    // @ts-expect-error type-def is wrong, need to access this via commit inner field
                    message: commit.commit.message,
                    // info is part of REST response:
                    // @ts-expect-error type-def is wrong, need to access this via commit inner field
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
    lastCommit: async (branch) => {
        // @ts-expect-error
        const { ownerUsername, reponame, commit } = branch; // info has been added while loading
        const { sha } = commit;
        if (!ownerUsername || !reponame) {
            return null;
        }
        return await getLastCommit(ownerUsername, reponame, sha);
    },
};

export const commitStatusResolver = (commit) => {
    const { sha, ownerUsername, reponame } = commit;
    if (!sha) return Promise.resolve([] as Array<GithubStatus>);

    return (
        getStatusesForRepo(
            ownerUsername, //username,
            reponame,
            sha
        ) ?? []
    );
};
export const githubCommitResolver: GithubCommitResolvers = {
    status: commitStatusResolver,
    associatedPullRequests: async (commit) => {
        // @ts-expect-error
        const { sha, ownerUsername, reponame } = commit;
        if (!sha) {
            return null;
        }
        const prs = await fetchRepoPullRequestsAssociatedWithCommit(ownerUsername, reponame, sha);
        return prs.map((pr) => ({
            ...pr,
            url: pr.html_url,
        }));
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
