import { buildSchema } from 'graphql';

export const githubSchemaGraphql = `
#
# "The root of all queries:"
#
type Query {
    github: GithubAPI
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
    name: String
    lastCommit: GithubCommit
}

type GithubCommit {
    sha: String
    author: UserOrCommitAuthor
    message: String
    date: String
    status: [GithubStatus]
    tree: GithubTree
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
    #issues(limit: Int): [GithubIssue]
    branches(limit: Int): [GithubBranch]
    owner: GithubUser
}

# Status of a commit
type GithubStatus {
    state: String
    description: String
    target_url: String
    context: String
    updated_at: String
}

type GithubTree {
    entries: [GithubTreeEntry]
}

type GithubTreeEntry {
    path: String
    last_commit: GithubCommit
}

type GithubUser {
    login: String
    id: String
    company: String
    avatar_url: String
    repos: [GithubRepo]
}

union UserOrCommitAuthor = GithubCommitAuthor | GithubUser
`;

export default buildSchema(githubSchemaGraphql);
