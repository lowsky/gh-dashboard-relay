/**
 * @generated SignedSource<<44fdff296cf014c598c125a7dad0aaa8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoBranchListPaginationQuery$variables = {
    id: string;
};
export type RepoBranchListPaginationQuery$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_repo'>;
          }
        | null
        | undefined;
};
export type RepoBranchListPaginationQuery = {
    response: RepoBranchListPaginationQuery$data;
    variables: RepoBranchListPaginationQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'id',
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'id',
                variableName: 'id',
            },
        ];
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'RepoBranchListPaginationQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        {
                            args: null,
                            kind: 'FragmentSpread',
                            name: 'RepoListFragment_repo',
                        },
                    ],
                    storageKey: null,
                },
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Operation',
            name: 'RepoBranchListPaginationQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: '__typename',
                            storageKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'id',
                            storageKey: null,
                        },
                        {
                            kind: 'InlineFragment',
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
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'totalCount',
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: 'pullRequests(first:1,states:["OPEN"])',
                                },
                            ],
                            type: 'Repository',
                            abstractKey: null,
                        },
                    ],
                    storageKey: null,
                },
            ],
        },
        params: {
            cacheID: 'bf50b346b174bc1dc7902a6675bb68f3',
            id: null,
            metadata: {},
            name: 'RepoBranchListPaginationQuery',
            operationKind: 'query',
            text: 'query RepoBranchListPaginationQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RepoListFragment_repo\n    id\n  }\n}\n\nfragment RepoListFragment_repo on Repository {\n  name\n  nameWithOwner\n  isFork\n  url\n  pullRequests(first: 1, states: [OPEN]) {\n    totalCount\n  }\n  id\n}\n',
        },
    };
})();

(node as any).hash = '1a9d0c4294c57bcfce310fcc08a4095c';

export default node;
