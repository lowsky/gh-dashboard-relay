export const typedefs = `
# This file was generated based on ".graphqlconfig". Do not edit manually.

schema {
    query: GraphQL_github_API
}

union UserOrCommitAuthor = GithubCommitAuthor | GithubUser

"The Github API"
type GithubAPI {
    repo(
        "Name of the repo"
        name: String!,
        "Username of the owner"
        ownerUsername: String!
    ): GithubRepo
    user(
        "Username of the user"
        username: String!
    ): GithubUser
}

type GithubBranch {
    lastCommit: GithubCommit
    name: String
}

type GithubCommit {
    author: UserOrCommitAuthor
    date: String
    message: String
    sha: String
    status: [GithubStatus]
    tree: GithubTree
}

"Commit author that is not associated with a Github acount"
type GithubCommitAuthor {
    email: String
    name: String
}

type GithubIssue {
    assignee: GithubUser
    body: String
    closed_by: GithubUser
    commentCount: Int
    comments: [GithubIssueCommentType]
    id: Int
    labels: [GithubIssueLabelType]
    state: String
    title: String
    user: GithubUser
}

type GithubIssueCommentType {
    body: String
    id: Int
    user: GithubUser
}

type GithubIssueLabelType {
    color: String
    name: String
    url: String
}

type GithubRepo {
    branches(limit: Int): [GithubBranch]
    commits(limit: Int): [GithubCommit]
    id: String
    issues(limit: Int): [GithubIssue]
    name: String
    owner: GithubUser
}

"Status of a commit"
type GithubStatus {
    context: String
    description: String
    state: String
    target_url: String
    updated_at: String
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

"APIs exposed as GraphQL"
type GraphQL_github_API {
    github: GithubAPI
}
`;
