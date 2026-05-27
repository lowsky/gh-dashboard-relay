/**
 * @generated SignedSource<<b53a6b22c3fcfd212588e3f2fa655f14>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RelayRootQuery$variables = {
    userName: string;
};
export type RelayRootQuery$data = {
    readonly rateLimit:
        | {
              readonly limit: number;
              readonly remaining: number;
              readonly resetAt: any;
              readonly used: number;
          }
        | null
        | undefined;
    readonly repositoryOwner:
        | {
              readonly user:
                  | {
                        readonly ' $fragmentSpreads': FragmentRefs<'UserWithReposFragment_user'>;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
};
export type RelayRootQuery = {
    response: RelayRootQuery$data;
    variables: RelayRootQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'userName',
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'login',
                variableName: 'userName',
            },
        ],
        v2 = {
            alias: null,
            args: null,
            concreteType: 'RateLimit',
            kind: 'LinkedField',
            name: 'rateLimit',
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'limit',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'remaining',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'used',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'resetAt',
                    storageKey: null,
                },
            ],
            storageKey: null,
        },
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: '__typename',
            storageKey: null,
        },
        v4 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
        },
        v5 = [
            {
                kind: 'Literal',
                name: 'first',
                value: 10,
            },
            {
                kind: 'Literal',
                name: 'orderBy',
                value: {
                    direction: 'ASC',
                    field: 'NAME',
                },
            },
            {
                kind: 'Literal',
                name: 'ownerAffiliations',
                value: ['OWNER'],
            },
        ],
        v6 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'totalCount',
            storageKey: null,
        };
    return {
        fragment: {
            argumentDefinitions: v0 /*:: as any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'RelayRootQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*:: as any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'repositoryOwner',
                    plural: false,
                    selections: [
                        {
                            fragment: {
                                kind: 'InlineFragment',
                                selections: [
                                    {
                                        args: null,
                                        kind: 'FragmentSpread',
                                        name: 'UserWithReposFragment_user',
                                    },
                                ],
                                type: 'User',
                                abstractKey: null,
                            },
                            kind: 'AliasedInlineFragmentSpread',
                            name: 'user',
                        },
                    ],
                    storageKey: null,
                },
                v2 /*:: as any*/,
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*:: as any*/,
            kind: 'Operation',
            name: 'RelayRootQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*:: as any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'repositoryOwner',
                    plural: false,
                    selections: [
                        v3 /*:: as any*/,
                        v4 /*:: as any*/,
                        {
                            kind: 'InlineFragment',
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'login',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'company',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'avatarUrl',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: v5 /*:: as any*/,
                                    concreteType: 'RepositoryConnection',
                                    kind: 'LinkedField',
                                    name: 'repositories',
                                    plural: false,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: 'RepositoryEdge',
                                            kind: 'LinkedField',
                                            name: 'edges',
                                            plural: true,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'Repository',
                                                    kind: 'LinkedField',
                                                    name: 'node',
                                                    plural: false,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'name',
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'nameWithOwner',
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'isFork',
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'url',
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: [
                                                                {
                                                                    kind: 'Literal',
                                                                    name: 'first',
                                                                    value: 1,
                                                                },
                                                                {
                                                                    kind: 'Literal',
                                                                    name: 'states',
                                                                    value: ['OPEN'],
                                                                },
                                                            ],
                                                            concreteType: 'PullRequestConnection',
                                                            kind: 'LinkedField',
                                                            name: 'pullRequests',
                                                            plural: false,
                                                            selections: [v6 /*:: as any*/],
                                                            storageKey: 'pullRequests(first:1,states:["OPEN"])',
                                                        },
                                                        v4 /*:: as any*/,
                                                        v3 /*:: as any*/,
                                                    ],
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'cursor',
                                                    storageKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: 'PageInfo',
                                            kind: 'LinkedField',
                                            name: 'pageInfo',
                                            plural: false,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'endCursor',
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'hasNextPage',
                                                    storageKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        v6 /*:: as any*/,
                                    ],
                                    storageKey:
                                        'repositories(first:10,orderBy:{"direction":"ASC","field":"NAME"},ownerAffiliations:["OWNER"])',
                                },
                                {
                                    alias: null,
                                    args: v5 /*:: as any*/,
                                    filters: ['orderBy', 'ownerAffiliations'],
                                    handle: 'connection',
                                    key: 'RepoList_user_repositories',
                                    kind: 'LinkedHandle',
                                    name: 'repositories',
                                },
                            ],
                            type: 'User',
                            abstractKey: null,
                        },
                    ],
                    storageKey: null,
                },
                v2 /*:: as any*/,
            ],
        },
        params: {
            cacheID: 'dcc0c547a6adf2f618d5ae59500248a1',
            id: null,
            metadata: {},
            name: 'RelayRootQuery',
            operationKind: 'query',
            text: 'query RelayRootQuery(\n  $userName: String!\n) {\n  repositoryOwner(login: $userName) {\n    __typename\n    ...UserWithReposFragment_user\n    id\n  }\n  rateLimit {\n    limit\n    remaining\n    used\n    resetAt\n  }\n}\n\nfragment RepoItemFragment_repo on Repository {\n  name\n  nameWithOwner\n  isFork\n  url\n  pullRequests(first: 1, states: [OPEN]) {\n    totalCount\n  }\n  id\n}\n\nfragment RepoListFragment_user on User {\n  repositories(orderBy: {field: NAME, direction: ASC}, first: 10, ownerAffiliations: [OWNER]) {\n    edges {\n      node {\n        ...RepoItemFragment_repo\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    totalCount\n  }\n  id\n}\n\nfragment UserFragment_user on User {\n  login\n  company\n  avatarUrl\n}\n\nfragment UserWithReposFragment_user on User {\n  ...UserFragment_user\n  ...RepoListFragment_user\n}\n',
        },
    };
})();

(node as any).hash = '120f0efbd27d02baae15cdda64add3e3';

export default node;
