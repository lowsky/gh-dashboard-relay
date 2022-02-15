import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
    repo?: Maybe<GithubRepo>;
    user?: Maybe<GithubUser>;
};

export type GithubApiRepoArgs = {
    name: Scalars['String'];
    ownerUsername: Scalars['String'];
};

export type GithubApiUserArgs = {
    username: Scalars['String'];
};

export type GithubBranch = {
    __typename?: 'GithubBranch';
    lastCommit?: Maybe<GithubCommit>;
    name: Scalars['String'];
    ownerUsername?: Maybe<Scalars['String']>;
    reponame?: Maybe<Scalars['String']>;
};

export type GithubCommit = {
    __typename?: 'GithubCommit';
    associatedPullRequests?: Maybe<Array<Maybe<PullRequest>>>;
    author?: Maybe<UserOrCommitAuthor>;
    date?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    sha?: Maybe<Scalars['String']>;
    status?: Maybe<Array<Maybe<GithubStatus>>>;
};

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
    limit?: InputMaybe<Scalars['Int']>;
};

export type GithubRepoCommitsArgs = {
    limit?: InputMaybe<Scalars['Int']>;
};

export type GithubStatus = {
    __typename?: 'GithubStatus';
    avatar_url?: Maybe<Scalars['String']>;
    context?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    target_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['String']>;
};

export type GithubUser = {
    __typename?: 'GithubUser';
    avatar_url?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    login?: Maybe<Scalars['String']>;
    repos?: Maybe<Array<Maybe<GithubRepo>>>;
};

export type PullRequest = {
    __typename?: 'PullRequest';
    number: Scalars['Int'];
    title?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

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
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    GithubAPI: ResolverTypeWrapper<GithubApi>;
    GithubBranch: ResolverTypeWrapper<GithubBranch>;
    GithubCommit: ResolverTypeWrapper<
        Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversTypes['UserOrCommitAuthor']> }
    >;
    GithubCommitAuthor: ResolverTypeWrapper<GithubCommitAuthor>;
    GithubRepo: ResolverTypeWrapper<GithubRepo>;
    GithubStatus: ResolverTypeWrapper<GithubStatus>;
    GithubUser: ResolverTypeWrapper<GithubUser>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    PullRequest: ResolverTypeWrapper<PullRequest>;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    UserOrCommitAuthor: ResolversTypes['GithubCommitAuthor'] | ResolversTypes['GithubUser'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Boolean: Scalars['Boolean'];
    GithubAPI: GithubApi;
    GithubBranch: GithubBranch;
    GithubCommit: Omit<GithubCommit, 'author'> & { author?: Maybe<ResolversParentTypes['UserOrCommitAuthor']> };
    GithubCommitAuthor: GithubCommitAuthor;
    GithubRepo: GithubRepo;
    GithubStatus: GithubStatus;
    GithubUser: GithubUser;
    Int: Scalars['Int'];
    PullRequest: PullRequest;
    Query: {};
    String: Scalars['String'];
    UserOrCommitAuthor: ResolversParentTypes['GithubCommitAuthor'] | ResolversParentTypes['GithubUser'];
};

export type GithubApiResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubAPI'] = ResolversParentTypes['GithubAPI']
> = {
    repo?: Resolver<
        Maybe<ResolversTypes['GithubRepo']>,
        ParentType,
        ContextType,
        RequireFields<GithubApiRepoArgs, 'name' | 'ownerUsername'>
    >;
    user?: Resolver<
        Maybe<ResolversTypes['GithubUser']>,
        ParentType,
        ContextType,
        RequireFields<GithubApiUserArgs, 'username'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubBranchResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubBranch'] = ResolversParentTypes['GithubBranch']
> = {
    lastCommit?: Resolver<Maybe<ResolversTypes['GithubCommit']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    ownerUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    reponame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubCommitResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubCommit'] = ResolversParentTypes['GithubCommit']
> = {
    associatedPullRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['PullRequest']>>>, ParentType, ContextType>;
    author?: Resolver<Maybe<ResolversTypes['UserOrCommitAuthor']>, ParentType, ContextType>;
    date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sha?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    status?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubStatus']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubCommitAuthorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubCommitAuthor'] = ResolversParentTypes['GithubCommitAuthor']
> = {
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubRepoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubRepo'] = ResolversParentTypes['GithubRepo']
> = {
    branches?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['GithubBranch']>>>,
        ParentType,
        ContextType,
        Partial<GithubRepoBranchesArgs>
    >;
    commits?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['GithubCommit']>>>,
        ParentType,
        ContextType,
        Partial<GithubRepoCommitsArgs>
    >;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['GithubUser']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubStatusResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubStatus'] = ResolversParentTypes['GithubStatus']
> = {
    avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    target_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GithubUserResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GithubUser'] = ResolversParentTypes['GithubUser']
> = {
    avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    repos?: Resolver<Maybe<Array<Maybe<ResolversTypes['GithubRepo']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PullRequestResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PullRequest'] = ResolversParentTypes['PullRequest']
> = {
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    github?: Resolver<Maybe<ResolversTypes['GithubAPI']>, ParentType, ContextType>;
    repo?: Resolver<
        Maybe<ResolversTypes['GithubRepo']>,
        ParentType,
        ContextType,
        RequireFields<QueryRepoArgs, 'name' | 'ownerUsername'>
    >;
    user?: Resolver<
        Maybe<ResolversTypes['GithubUser']>,
        ParentType,
        ContextType,
        RequireFields<QueryUserArgs, 'username'>
    >;
};

export type UserOrCommitAuthorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UserOrCommitAuthor'] = ResolversParentTypes['UserOrCommitAuthor']
> = {
    __resolveType: TypeResolveFn<'GithubCommitAuthor' | 'GithubUser', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    GithubAPI?: GithubApiResolvers<ContextType>;
    GithubBranch?: GithubBranchResolvers<ContextType>;
    GithubCommit?: GithubCommitResolvers<ContextType>;
    GithubCommitAuthor?: GithubCommitAuthorResolvers<ContextType>;
    GithubRepo?: GithubRepoResolvers<ContextType>;
    GithubStatus?: GithubStatusResolvers<ContextType>;
    GithubUser?: GithubUserResolvers<ContextType>;
    PullRequest?: PullRequestResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    UserOrCommitAuthor?: UserOrCommitAuthorResolvers<ContextType>;
};
