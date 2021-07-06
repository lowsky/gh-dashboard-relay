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
    GithubCommitAuthorResolvers,
    GithubCommitResolvers,
    GithubRepoResolvers,
    GithubUserResolvers,
} from './types/resolvers';

const githubResolver: GithubApiResolvers = {
    user: (_, { username }) => {
        return getUser(username);
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
        return getReposForUser(user.login);
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
        return getCommitsForRepo(repo.owner?.login, repo.name).then((commitList) => {
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
        return getCommitsForRepo(ownerUsername, reponame, sha)
            .then((list) => {
                // console.log('commits for repos:',{ list });

                return list[0];
            })
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
        return getStatusesForRepo(username, reponame, sha) ?? [];
    },
    associatedPullRequests: async (commit) => {
        // @ts-ignore
        const { sha, ownerUsername, reponame } = commit;
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
        __resolveType(obj) {
            console.log(obj);
            if (obj.__typename === 'GithubUser' || obj.login) {
                return 'GithubUser';
            }
            return 'GithubCommitAuthor';
        },
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
