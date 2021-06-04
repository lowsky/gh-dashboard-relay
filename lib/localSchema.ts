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
        name: String!
    }

    type GithubCommit {
        author: UserOrCommitAuthor
        date: String
        message: String
        sha: String
        url: String
        status: [GithubStatus]
        # tree: GithubTree
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
        avatar_url: String
        url: String
        # creator: User...
        # "id": 10062999186,
        # "node_id": "MDEzOlN0YXR1c0NvbnRleHQxMDA2Mjk5OTE4Ng==",
        # "created_at": "2020-06-29T08:37:19Z",
        # "updated_at": "2020-06-29T08:37:19Z",
    }

    type GithubUser {
        avatar_url: String
        company: String
        id: String
        login: String
        repos: [GithubRepo]
    }
`;
