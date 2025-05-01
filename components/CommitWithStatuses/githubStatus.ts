export type Maybe<T> = T | null;

export type GithubStatus = {
    avatar_url?: Maybe<string>;
    context?: Maybe<string>;
    description?: Maybe<string>;
    state?: Maybe<string>;
    target_url?: Maybe<string>;
    updated_at?: Maybe<string>;
};
export type GithubCommitAuthor = {
    email?: Maybe<string>;
    name?: Maybe<string>;
};
export type GithubUser = {
    avatarUrl?: Maybe<string>;
    company?: Maybe<string>;
    id?: Maybe<string>;
    login?: Maybe<string>;
};
export type UserOrCommitAuthor = GithubCommitAuthor | GithubUser;
