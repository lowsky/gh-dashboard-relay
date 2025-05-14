/**
 * @generated SignedSource<<f0f0f0de4f6c8ffc063bb2d2489d726c>>
 * @lightSyntaxTransform
 * @nogrep
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
              readonly ' $fragmentSpreads': FragmentRefs<'UserWithReposFragment_user'>;
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
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'RelayRootQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'repositoryOwner',
                    plural: false,
                    selections: [
                        {
                            args: null,
                            kind: 'FragmentSpread',
                            name: 'UserWithReposFragment_user',
                        },
                    ],
                    storageKey: null,
                },
                v2 /*: any*/,
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Operation',
            name: 'RelayRootQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'repositoryOwner',
                    plural: false,
                    selections: [
                        v3 /*: any*/,
                        v4 /*: any*/,
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
                                    args: v5 /*: any*/,
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
                                                            name: 'url',
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            kind: 'ScalarField',
                                                            name: 'description',
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
                                                            selections: [v6 /*: any*/],
                                                            storageKey: 'pullRequests(first:1,states:["OPEN"])',
                                                        },
                                                        v4 /*: any*/,
                                                        v3 /*: any*/,
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
                                        v6 /*: any*/,
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
                                    ],
                                    storageKey: 'repositories(first:10,orderBy:{"direction":"ASC","field":"NAME"})',
                                },
                                {
                                    alias: null,
                                    args: v5 /*: any*/,
                                    filters: ['orderBy'],
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
                v2 /*: any*/,
            ],
        },
        params: {
            cacheID: '1b7c71cef4a45becd640aeacf845820b',
            id: null,
            metadata: {},
            name: 'RelayRootQuery',
            operationKind: 'query',
            text: 'query RelayRootQuery(\n  $userName: String!\n) {\n  repositoryOwner(login: $userName) {\n    __typename\n    ...UserWithReposFragment_user\n    id\n  }\n  rateLimit {\n    limit\n    remaining\n    used\n    resetAt\n  }\n}\n\nfragment RepoListFragment_repo on Repository {\n  name\n  nameWithOwner\n  url\n  description\n  pullRequests(first: 1, states: [OPEN]) {\n    totalCount\n  }\n  id\n}\n\nfragment RepoListFragment_user on User {\n  repositories(orderBy: {field: NAME, direction: ASC}, first: 10) {\n    edges {\n      node {\n        ...RepoListFragment_repo\n        id\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserFragment_user on User {\n  login\n  company\n  avatarUrl\n}\n\nfragment UserWithReposFragment_user on User {\n  ...UserFragment_user\n  ...RepoListFragment_user\n}\n',
        },
    };
})();

(node as any).hash = '61594f2395eb39c6db2538e4332e2fd9';

export default node;
