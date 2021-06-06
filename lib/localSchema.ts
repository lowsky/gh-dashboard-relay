
    // Auto-generated, instead of using a webpack-loader...
    // Just wrapping schema/schema.graphql
export const typeDefs = `
# source: http://localhost:3000/graphql
# timestamp: Sun Feb 25 2018 02:36:17 GMT+0100 (CET)

# The Github API
type GithubAPI {
    user(
        # Username of the user
        username: String!
    ): GithubUser
    repo(
        # Name of the repo
        name: String!

        # Username of the owner
        ownerUsername: String!
    ): GithubRepo
}

type GithubBranch {
    ownerUsername: String
    reponame: String
    name: String!
    lastCommit: GithubCommit
}

type GithubCommit {
    sha: String
    author: UserOrCommitAuthor
    message: String
    date: String
    status: [GithubStatus]
    associatedPullRequests: [PullRequest]
}

# Commit author that is not associated with a Github acount
type GithubCommitAuthor {
    email: String
    name: String
}

type GithubRepo {
    id: String
    name: String
    commits(limit: Int): [GithubCommit]
    branches(limit: Int): [GithubBranch]
    owner: GithubUser
}

# Status of a commit
type GithubStatus {
    state: String
    description: String
    target_url: String
    avatar_url: String
    context: String
    updated_at: String
}

type GithubUser {
    login: String
    id: String
    company: String
    avatar_url: String
    repos: [GithubRepo]
}

type Query {
    github: GithubAPI
}

union UserOrCommitAuthor = GithubCommitAuthor | GithubUser

type PullRequest {
    title: String
    number: Int!
    url: String
}
`;
    