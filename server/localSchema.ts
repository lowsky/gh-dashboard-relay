import { makeExecutableSchema } from '@graphql-tools/schema';

import {
    getBranchesForRepo,
    getCommitsForRepo,
    getRepoForUser,
    getReposForUser,
    getStatusesForRepo,
    getUser,
} from './src/lambda/apis/github';

export const grabUsernameAndReponameFromURL = (url) => {
    let array = url.split('https://api.github.com/repos/')[1].split('/');
    return {
        username: array[0],
        reponame: array[1],
    };
};

// Construct a schema, using GraphQL schema language
export const typeDefs = `
    # This file was generated based on ".graphqlconfig". Do not edit manually.

    type Query {
        github: GithubAPI
               repo("Name of the repo" name: String!, "Username of the owner" ownerUsername: String!): GithubRepo
        user("Username of the user" username: String!): GithubUser
  
    }

    union UserOrCommitAuthor = GithubCommitAuthor | GithubUser

    "The Github API"
    type GithubAPI {
        repo("Name of the repo" name: String!, "Username of the owner" ownerUsername: String!): GithubRepo
        user("Username of the user" username: String!): GithubUser
    }

    type GithubBranch {
    ownerUsername: String
    reponame: String
    sha: String

        lastCommit: GithubCommit
        name: String
    }

    type GithubCommit {
        author: UserOrCommitAuthor
        date: String
        message: String
        sha: String
    url: String
        status: [GithubStatus]
        tree: GithubTree
    }

    "Commit author that is not associated with a Github acount"
    type GithubCommitAuthor {
        email: String
        name: String
    }

    type GithubRepo {
        branches(limit: Int): [GithubBranch]
        commits(limit: Int): [GithubCommit]
        id: String
        name: String
        owner: GithubUser
    }

    "Status of a commit"
    type GithubStatus {
    context: String # e.g. UI Tests
        description: String
    state: String # e.g. success
        target_url: String
        updated_at: String
    avatar_url:String
    url:String
    # creator: User...
    # "id": 10062999186,
    # "node_id": "MDEzOlN0YXR1c0NvbnRleHQxMDA2Mjk5OTE4Ng==",
    # "created_at": "2020-06-29T08:37:19Z",
    # "updated_at": "2020-06-29T08:37:19Z",
    }

    type GithubTree {
        entries: [GithubTreeEntry]
    }

    type GithubTreeEntry {
        last_commit: GithubCommit
        path: String
    }

    type GithubUser {
        avatar_url: String
        company: String
        id: String
        login: String
        repos: [GithubRepo]
    }

`;

// The root provides a resolver function for each API endpoint
/*const __GithubAPI: GithubApiResolvers = {
    // eslint-disable-next-line no-unused-vars
    user: function (parent: any, { username }): GithubUser {
        console.warn('resolved github', username);
        console.warn('resolved github', parent);
        console.warn('resolved github');
        return {
            id: 3456,
            company: 'compony',
            avatar_url: 'gravatar',
            login: username,
        };
    },
    repo: async (): Promise<GithubRepo> => {
        //const repoData = await getRepoForUser(ownerUsername, name);
        return {
            ...repoData,

            branches: async () => {
                const ownerUsername = ownerUsername;
                return getBranchesForRepo(ownerUsername, name).then((branches) => {
                    // add repo referenceData
                    return branches.map((b) => ({ reponame: name, ownerUsername, ...b }));
                });

            },
            commits: async () => {
                //return getCommitsForRepo(ownerUsername, name);
            },


        };
    },
};
*/

export const resolvers = {
    /*
    GithubTreeEntry: {
        last_commit: (parent) => {
                const path = parent.path;
                const { username, reponame } = grabUsernameAndReponameFromURL(parent.url);
                return getCommitsForRepo(username, reponame, { path, limit: 1 }).then((list) => list[0]); // just the commit object
    },
    GithubTree: {},
    */

    GithubCommit: {
        // @ts-ignore
        status: (commit) => {
            // eslint-disable-next-line no-unused-vars
            const st = {
                url: 'https://api.github.com/repos/lowsky/dashboard/statuses/5fb8e0df2c4a8b3f04d7a2fd88a181d5863bd5a5',
                avatar_url: 'https://avatars0.githubusercontent.com/oa/581325?v=4',
                id: 10062999186,
                node_id: 'MDEzOlN0YXR1c0NvbnRleHQxMDA2Mjk5OTE4Ng==',
                state: 'success',
                description: '10 tests unchanged.',
                target_url: 'https://www.chromatic.com/build?appId=5afab010f1d19900240b5469&number=53',
                context: 'UI Tests',
                created_at: '2020-06-29T08:37:19Z',
                updated_at: '2020-06-29T08:37:19Z',
                creator: {
                    login: 'lowsky',
                    id: 217931,
                    node_id: 'MDQ6VXNlcjIxNzkzMQ==',
                    avatar_url: 'https://avatars1.githubusercontent.com/u/217931?v=4',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/lowsky',
                    html_url: 'https://github.com/lowsky',
                    followers_url: 'https://api.github.com/users/lowsky/followers',
                    following_url: 'https://api.github.com/users/lowsky/following{/other_user}',
                    gists_url: 'https://api.github.com/users/lowsky/gists{/gist_id}',
                    starred_url: 'https://api.github.com/users/lowsky/starred{/owner}{/repo}',
                    subscriptions_url: 'https://api.github.com/users/lowsky/subscriptions',
                    organizations_url: 'https://api.github.com/users/lowsky/orgs',
                    repos_url: 'https://api.github.com/users/lowsky/repos',
                    events_url: 'https://api.github.com/users/lowsky/events{/privacy}',
                    received_events_url: 'https://api.github.com/users/lowsky/received_events',
                    type: 'User',
                    site_admin: false,
                },
            };

            const { username, reponame } = grabUsernameAndReponameFromURL(commit.url);
            const { sha } = commit;
            return getStatusesForRepo(username, reponame, sha);
        },
    },

    GithubBranch: {
        lastCommit: (branch) => {
            const { ownerUsername, reponame } = branch; // info has been added while loading
            return getCommitsForRepo(ownerUsername, reponame, { sha: branch.sha, limit: 1 })
                .then((list) => list[0])
                .then((commit) => {
                    const lastCom = {
                        ...commit,
                        message: commit.commit.message,
                        date: commit.commit.committer.date,
                    };
                    console.log(lastCom);
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
        // @ts-ignore
        repos: (user) => {
            return getReposForUser(user.login);
        },
    },
    GithubRepo: {
        // @ts-ignore
        branches: (repo, { limit }) => {
            console.log(`
            resolve github pia - uuuser - repo - branches
            `);
            const reponame = repo.name;
            const ownerUsername = repo.owner?.login;
            return getBranchesForRepo(ownerUsername || '', reponame || '')
                .then((branches) => {
                    // add repo referenceData
                    // @ts-ignore
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
        // @ts-ignore
        commits: (repo, { limit }) => {
            return getCommitsForRepo(repo.owner?.login, repo.name, { limit }).then((commitList) => {
                // @ts-ignore
                return commitList.map((commit) => ({
                    ...commit,
                    message: commit.commit.message,
                    date: commit.commit.commiter.date,
                }));
            });
        },
    },
    Query: {
        github: () => {
            console.log('resolve github pia');
            return {};
        },
    },
    GithubAPI: {
        user: (parent, { username }) => {
            console.log('resolve github pia - uuuser', parent, username);
            return getUser(username);
        },
        repo: (parent, { ownerUsername, name }) => {
            console.log('resolve github pia - repooo', parent, ownerUsername, name);
            return getRepoForUser(ownerUsername, name);
        },
    },
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
