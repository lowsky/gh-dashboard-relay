export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  github?: Maybe<GithubApi>;
  repo?: Maybe<GithubRepo>;
  user?: Maybe<GithubUser>;
};


export type QueryRepoArgs = {
  name: Scalars['String'];
  ownerUsername: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type UserOrCommitAuthor = GithubCommitAuthor | GithubUser;

/** The Github API */
export type GithubApi = {
  __typename?: 'GithubAPI';
  repo?: Maybe<GithubRepo>;
  user?: Maybe<GithubUser>;
};


/** The Github API */
export type GithubApiRepoArgs = {
  name: Scalars['String'];
  ownerUsername: Scalars['String'];
};


/** The Github API */
export type GithubApiUserArgs = {
  username: Scalars['String'];
};

export type GithubBranch = {
  __typename?: 'GithubBranch';
  lastCommit?: Maybe<GithubCommit>;
  name?: Maybe<Scalars['String']>;
};

export type GithubCommit = {
  __typename?: 'GithubCommit';
  author?: Maybe<UserOrCommitAuthor>;
  date?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sha?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<GithubStatus>>>;
  tree?: Maybe<GithubTree>;
};

/** Commit author that is not associated with a Github acount */
export type GithubCommitAuthor = {
  __typename?: 'GithubCommitAuthor';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GithubRepo = {
  __typename?: 'GithubRepo';
  branches?: Maybe<Array<Maybe<GithubBranch>>>;
  commits?: Maybe<Array<Maybe<GithubCommit>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<GithubUser>;
};


export type GithubRepoBranchesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type GithubRepoCommitsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** Status of a commit */
export type GithubStatus = {
  __typename?: 'GithubStatus';
  context?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  target_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type GithubTree = {
  __typename?: 'GithubTree';
  entries?: Maybe<Array<Maybe<GithubTreeEntry>>>;
};

export type GithubTreeEntry = {
  __typename?: 'GithubTreeEntry';
  last_commit?: Maybe<GithubCommit>;
  path?: Maybe<Scalars['String']>;
};

export type GithubUser = {
  __typename?: 'GithubUser';
  avatar_url?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  repos?: Maybe<Array<Maybe<GithubRepo>>>;
};

/** APIs exposed as GraphQL */
export type GraphQl_Github_Api = {
  __typename?: 'GraphQL_github_API';
  github?: Maybe<GithubApi>;
};
