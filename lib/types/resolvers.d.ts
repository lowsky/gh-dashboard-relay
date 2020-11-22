import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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
  ownerUsername?: Maybe<Scalars['String']>;
  reponame?: Maybe<Scalars['String']>;
  sha?: Maybe<Scalars['String']>;
  lastCommit?: Maybe<GithubCommit>;
  name?: Maybe<Scalars['String']>;
};

export type GithubCommit = {
  __typename?: 'GithubCommit';
  author?: Maybe<UserOrCommitAuthor>;
  date?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sha?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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
  url?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  UserOrCommitAuthor: ResolversTypes['GithubCommitAuthor'] | ResolversTypes['GithubUser'];
  GithubAPI: ResolverTypeWrapper<GithubApi>;
  GithubBranch: ResolverTypeWrapper<GithubBranch>;
  GithubCommit: ResolverTypeWrapper<Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversTypes['UserOrCommitAuthor']> }>;
  GithubCommitAuthor: ResolverTypeWrapper<GithubCommitAuthor>;
  GithubRepo: ResolverTypeWrapper<GithubRepo>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  GithubStatus: ResolverTypeWrapper<GithubStatus>;
  GithubTree: ResolverTypeWrapper<GithubTree>;
  GithubTreeEntry: ResolverTypeWrapper<GithubTreeEntry>;
  GithubUser: ResolverTypeWrapper<GithubUser>;
  GraphQL_github_API: ResolverTypeWrapper<GraphQl_Github_Api>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  UserOrCommitAuthor: ResolversParentTypes['GithubCommitAuthor'] | ResolversParentTypes['GithubUser'];
  GithubAPI: GithubApi;
  GithubBranch: GithubBranch;
  GithubCommit: Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversParentTypes['UserOrCommitAuthor']> };
  GithubCommitAuthor: GithubCommitAuthor;
  GithubRepo: GithubRepo;
  Int: Scalars['Int'];
  GithubStatus: GithubStatus;
  GithubTree: GithubTree;
  GithubTreeEntry: GithubTreeEntry;
  GithubUser: GithubUser;
  GraphQL_github_API: GraphQl_Github_Api;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  github?: Resolver<Maybe<ResolversTypes['GithubAPI']>, ParentType, ContextType>;
  repo?: Resolver<Maybe<ResolversTypes['GithubRepo']>, ParentType, ContextType, RequireFields<QueryRepoArgs, 'name' | 'ownerUsername'>>;
  user?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
}>;

export type UserOrCommitAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOrCommitAuthor'] = ResolversParentTypes['UserOrCommitAuthor']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GithubCommitAuthor' | 'GithubUser', ParentType, ContextType>;
}>;

export type GithubApiResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubAPI'] = ResolversParentTypes['GithubAPI']> = ResolversObject<{
  repo?: Resolver<Maybe<ResolversTypes['GithubRepo']>, ParentType, ContextType, RequireFields<GithubApiRepoArgs, 'name' | 'ownerUsername'>>;
  user?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType, RequireFields<GithubApiUserArgs, 'username'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubBranchResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubBranch'] = ResolversParentTypes['GithubBranch']> = ResolversObject<{
  ownerUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reponame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sha?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastCommit?: Resolver<Maybe<ResolversTypes['GithubCommit']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubCommitResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubCommit'] = ResolversParentTypes['GithubCommit']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['UserOrCommitAuthor']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sha?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubStatus']>>>, ParentType, ContextType>;
  tree?: Resolver<Maybe<ResolversTypes['GithubTree']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubCommitAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubCommitAuthor'] = ResolversParentTypes['GithubCommitAuthor']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubRepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubRepo'] = ResolversParentTypes['GithubRepo']> = ResolversObject<{
  branches?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubBranch']>>>, ParentType, ContextType, RequireFields<GithubRepoBranchesArgs, never>>;
  commits?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubCommit']>>>, ParentType, ContextType, RequireFields<GithubRepoCommitsArgs, never>>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubStatus'] = ResolversParentTypes['GithubStatus']> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubTreeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubTree'] = ResolversParentTypes['GithubTree']> = ResolversObject<{
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubTreeEntry']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubTreeEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubTreeEntry'] = ResolversParentTypes['GithubTreeEntry']> = ResolversObject<{
  last_commit?: Resolver<Maybe<ResolversTypes['GithubCommit']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GithubUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['GithubUser'] = ResolversParentTypes['GithubUser']> = ResolversObject<{
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repos?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubRepo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GraphQl_Github_ApiResolvers<ContextType = any, ParentType extends ResolversParentTypes['GraphQL_github_API'] = ResolversParentTypes['GraphQL_github_API']> = ResolversObject<{
  github?: Resolver<Maybe<ResolversTypes['GithubAPI']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  UserOrCommitAuthor?: UserOrCommitAuthorResolvers;
  GithubAPI?: GithubApiResolvers<ContextType>;
  GithubBranch?: GithubBranchResolvers<ContextType>;
  GithubCommit?: GithubCommitResolvers<ContextType>;
  GithubCommitAuthor?: GithubCommitAuthorResolvers<ContextType>;
  GithubRepo?: GithubRepoResolvers<ContextType>;
  GithubStatus?: GithubStatusResolvers<ContextType>;
  GithubTree?: GithubTreeResolvers<ContextType>;
  GithubTreeEntry?: GithubTreeEntryResolvers<ContextType>;
  GithubUser?: GithubUserResolvers<ContextType>;
  GraphQL_github_API?: GraphQl_Github_ApiResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
