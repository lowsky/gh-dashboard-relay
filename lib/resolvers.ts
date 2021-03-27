import {
    getBranchesForRepo,
    getCommitsForRepo,
    getRepoForUser,
    getReposForUser,
    getStatusesForRepo,
    getUser,
} from './github';

export const resolvers = {
    GithubCommit: {
        status: (commit) => {
            // eslint-disable-next-line no-unused-vars
            const { username, reponame } = grabUsernameAndReponameFromURL(commit.url);
            const { sha } = commit;
            return getStatusesForRepo(username, reponame, sha) ?? [];
        },
    },

    GithubBranch: {
        lastCommit: (branch) => {
            const { ownerUsername, reponame } = branch; // info has been added while loading
            return getCommitsForRepo(ownerUsername, reponame, branch.sha)
                .then((list) => {
                    return list[0];
                })
                .then((commit) => {
                    const lastCom = {
                        ...commit,
                        // @ts-ignore
                        message: commit.commit.message,
                        // @ts-ignore
                        date: commit.commit.committer.date,
                    };
                    return lastCom;
                });
        },
    },
    UserOrCommitAuthor: {
        __resolveType(obj) {
            if (obj.__typename === 'GithubUser') {
                return 'GithubUser';
            }
            return 'GithubCommitAuthor';
        },
    },
    GithubUser: {
        id: (user) => {
            return String(user.id);
        },
        repos: (user) => {
            return getReposForUser(user.login);
        },
    },
    GithubRepo: {
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
                        // @ts-ignore
                        message: commit.commit.message,
                        // @ts-ignore
                        date: commit.commit.committer.date,
                    };
                });
            });
        },
    },
    Query: {
        github: () => {
            return {};
        },
        user: (_, { username }) => {
            return getUser(username);
        },
        repo: (_, { ownerUsername, name }) => {
            return getRepoForUser(ownerUsername, name);
        },
    },
    GithubAPI: {
        user: (_, { username }) => {
            return getUser(username);
        },
        repo: (_, { ownerUsername, name }) => {
            return getRepoForUser(ownerUsername, name);
        },
    },
};

const grabUsernameAndReponameFromURL = (url) => {
    let array = url.split('https://api.github.com/repos/')[1].split('/');
    return {
        username: array[0],
        reponame: array[1],
    };
};
