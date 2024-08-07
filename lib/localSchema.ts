// Auto-generated, instead of using a webpack-loader...
// Just wrapping schema/schema.graphql
export const typeDefs = `
directive @defer(if: Boolean, label: String) on FRAGMENT_SPREAD | INLINE_FRAGMENT

"""
The Github API
"""
type GithubAPI {
    user(
        username: String!
    ): GithubUser
    repo(
        name: String!

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

"""Commit author that is not associated with a Github account"""
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

"""Status of a commit"""
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
    """@deprecated"""
    github: GithubAPI

    user(
        username: String!
    ): GithubUser
    repo(
        name: String!

        ownerUsername: String!
    ): GithubRepo
}

union UserOrCommitAuthor = GithubCommitAuthor | GithubUser

type PullRequest {
    title: String
    number: Int!
    html_url: String
    head: GithubGitTip!
}

type GithubGitTip {
    label: String!
    sha: String!
}

`;
