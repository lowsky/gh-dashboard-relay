import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GithubApi = {
  __typename?: 'GithubAPI';
  user?: Maybe<GithubUser>;
  repo?: Maybe<GithubRepo>;
};


export type GithubApiUserArgs = {
  username: Scalars['String'];
};


export type GithubApiRepoArgs = {
  name: Scalars['String'];
  ownerUsername: Scalars['String'];
};

export type GithubBranch = {
  __typename?: 'GithubBranch';
  ownerUsername?: Maybe<Scalars['String']>;
  reponame?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  lastCommit?: Maybe<GithubCommit>;
};

export type GithubCommit = {
  __typename?: 'GithubCommit';
  sha?: Maybe<Scalars['String']>;
  author?: Maybe<UserOrCommitAuthor>;
  message?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<GithubStatus>>>;
  associatedPullRequests?: Maybe<Array<Maybe<PullRequest>>>;
};

export type GithubCommitAuthor = {
  __typename?: 'GithubCommitAuthor';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GithubRepo = {
  __typename?: 'GithubRepo';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  commits?: Maybe<Array<Maybe<GithubCommit>>>;
  branches?: Maybe<Array<Maybe<GithubBranch>>>;
  owner?: Maybe<GithubUser>;
};


export type GithubRepoCommitsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type GithubRepoBranchesArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type GithubStatus = {
  __typename?: 'GithubStatus';
  state?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  target_url?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type GithubUser = {
  __typename?: 'GithubUser';
  login?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  repos?: Maybe<Array<Maybe<GithubRepo>>>;
};

export type Query = {
  __typename?: 'Query';
  github?: Maybe<GithubApi>;
};

export type UserOrCommitAuthor = GithubCommitAuthor | GithubUser;

export type PullRequest = {
  __typename?: 'PullRequest';
  title?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  GithubAPI: ResolverTypeWrapper<GithubApi>;
  String: ResolverTypeWrapper<Scalars['String']>;
  GithubBranch: ResolverTypeWrapper<GithubBranch>;
  GithubCommit: ResolverTypeWrapper<Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversTypes['UserOrCommitAuthor']> }>;
  GithubCommitAuthor: ResolverTypeWrapper<GithubCommitAuthor>;
  GithubRepo: ResolverTypeWrapper<GithubRepo>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  GithubStatus: ResolverTypeWrapper<GithubStatus>;
  GithubUser: ResolverTypeWrapper<GithubUser>;
  Query: ResolverTypeWrapper<{}>;
  UserOrCommitAuthor: ResolversTypes['GithubCommitAuthor'] | ResolversTypes['GithubUser'];
  PullRequest: ResolverTypeWrapper<PullRequest>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  GithubAPI: GithubApi;
  String: Scalars['String'];
  GithubBranch: GithubBranch;
  GithubCommit: Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversParentTypes['UserOrCommitAuthor']> };
  GithubCommitAuthor: GithubCommitAuthor;
  GithubRepo: GithubRepo;
  Int: Scalars['Int'];
  GithubStatus: GithubStatus;
  GithubUser: GithubUser;
  Query: {};
  UserOrCommitAuthor: ResolversParentTypes['GithubCommitAuthor'] | ResolversParentTypes['GithubUser'];
  PullRequest: PullRequest;
  Boolean: Scalars['Boolean'];
};

export type GithubApiResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubAPI'] = ResolversParentTypes['GithubAPI']> = {
  user?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType, RequireFields<GithubApiUserArgs, 'username'>>;
  repo?: Resolver<Maybe<ResolversTypes['GithubRepo']>, ParentType, ContextType, RequireFields<GithubApiRepoArgs, 'name' | 'ownerUsername'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubBranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubBranch'] = ResolversParentTypes['GithubBranch']> = {
  ownerUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reponame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastCommit?: Resolver<Maybe<ResolversTypes['GithubCommit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubCommitResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubCommit'] = ResolversParentTypes['GithubCommit']> = {
  sha?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['UserOrCommitAuthor']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubStatus']>>>, ParentType, ContextType>;
  associatedPullRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['PullRequest']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubCommitAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubCommitAuthor'] = ResolversParentTypes['GithubCommitAuthor']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubRepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubRepo'] = ResolversParentTypes['GithubRepo']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  commits?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubCommit']>>>, ParentType, ContextType, RequireFields<GithubRepoCommitsArgs, never>>;
  branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubBranch']>>>, ParentType, ContextType, RequireFields<GithubRepoBranchesArgs, never>>;
  owner?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubStatus'] = ResolversParentTypes['GithubStatus']> = {
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubUser'] = ResolversParentTypes['GithubUser']> = {
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repos?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubRepo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  github?: Resolver<Maybe<ResolversTypes['GithubAPI']>, ParentType, ContextType>;
};

export type UserOrCommitAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrCommitAuthor'] = ResolversParentTypes['UserOrCommitAuthor']> = {
  __resolveType: TypeResolveFn<'GithubCommitAuthor' | 'GithubUser', ParentType, ContextType>;
};

export type PullRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['PullRequest'] = ResolversParentTypes['PullRequest']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  GithubAPI?: GithubApiResolvers<ContextType>;
  GithubBranch?: GithubBranchResolvers<ContextType>;
  GithubCommit?: GithubCommitResolvers<ContextType>;
  GithubCommitAuthor?: GithubCommitAuthorResolvers<ContextType>;
  GithubRepo?: GithubRepoResolvers<ContextType>;
  GithubStatus?: GithubStatusResolvers<ContextType>;
  GithubUser?: GithubUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserOrCommitAuthor?: UserOrCommitAuthorResolvers<ContextType>;
  PullRequest?: PullRequestResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
