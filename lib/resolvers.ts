import {
    fetchRepoPullRequestsAssociatedWithCommit,
    getBranchesForRepo,
    getCommitsForRepo,
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
    GithubUser,
    GithubUserResolvers,
} from './types/resolvers';

const githubResolver: GithubApiResolvers = {
    user: async (_, { username }) => {
        try {
            return await getUser(username);
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
        if(user.login) {
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
            return null;
        }
        return getCommitsForRepo(owner.login, name).then((commitList) => {
            return commitList.map((commit) => {
                return {
                    ...commit,
                    // info is part of REST response:
                    // @ts-ignore
                    message: commit.commit.message,
                    // info is part of REST response:
                    // @ts-ignore
                    date: commit.commit.committer.date,
                };
            });
        });
    },
};

const queryResolver = {
    github: () => {
        return {};
    },
};

const githubBranchResolver: GithubBranchResolvers = {
    lastCommit: (branch) => {
        // @ts-ignore
        const { ownerUsername, reponame, commit } = branch; // info has been added while loading
        const { sha } = commit;
        if (!ownerUsername || !reponame) {
            return null;
        }
        return getCommitsForRepo(ownerUsername, reponame, sha) //
            .then((commits) => commits[0])
            .then((commit) => {
                // @ts-ignore
                const message = commit.commit.message;
                // @ts-ignore
                const date = commit.commit.committer?.date;
                return {
                    ...commit,
                    message,
                    date,
                    ownerUsername,
                    reponame,
                };
            });
    },
};

const githubCommitResolver: GithubCommitResolvers = {
    status: (commit) => {
        // @ts-ignore
        const { username, reponame } = grabUsernameAndReponameFromURL(commit.url); // url was added in parent object
        const { sha } = commit;
        if(!sha) return null;

        return getStatusesForRepo(username, reponame, sha) ?? [];
    },
    associatedPullRequests: async (commit) => {
        // @ts-ignore
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

const grabUsernameAndReponameFromURL = (url) => {
    let array = url.split('https://api.github.com/repos/')[1].split('/');
    return {
        username: array[0],
        reponame: array[1],
    };
};
