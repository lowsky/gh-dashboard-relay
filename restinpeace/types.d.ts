export type Maybe<T> = T | null;

export type GithubBranch = {
    lastCommit?: Maybe<GithubCommit>;
    name: string;
    ownerUsername?: Maybe<string>;
    reponame?: Maybe<string>;
};

export type GithubCommit = {
    associatedPullRequests?: Maybe<Array<Maybe<PullRequest>>>;
    author?: Maybe<UserOrCommitAuthor>;
    date?: Maybe<string>;
    message?: Maybe<string>;
    sha?: Maybe<string>;
    status?: Maybe<Array<Maybe<GithubStatus>>>;
    statuses?: Maybe<Array<Maybe<GithubStatus>>>;
};

export type GithubCommitAuthor = {
    email?: Maybe<string>;
    name?: Maybe<string>;
};

export type GithubRepo = {
    branches?: Maybe<Array<Maybe<GithubBranch>>>;
    commits?: Maybe<Array<Maybe<GithubCommit>>>;
    id?: Maybe<string>;
    name?: Maybe<string>;
    owner?: Maybe<GithubUser>;
};

export type GithubStatus = {
    avatar_url?: Maybe<string>;
    context?: Maybe<string>;
    description?: Maybe<string>;
    state?: Maybe<string>;
    target_url?: Maybe<string>;
    updated_at?: Maybe<string>;
};

export type GithubUser = {
    avatar_url?: Maybe<string>;
    company?: Maybe<string>;
    id?: Maybe<string>;
    login?: Maybe<string>;
    repos?: Maybe<Array<Maybe<GithubRepo>>>;
};

export type PullRequest = {
    number: number;
    title?: Maybe<string>;
    url?: Maybe<string>;
};

export type UserOrCommitAuthor = GithubCommitAuthor | GithubUser;
