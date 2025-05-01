/**
 * @generated SignedSource<<f7b0823350a1386d0082220c318995f7>>
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
            cacheID: 'a50e60fbf48b3b33cf6d4c7fe3218af7',
            id: null,
            metadata: {},
            name: 'RepoBranchListPaginationQuery',
            operationKind: 'query',
            text: 'query RepoBranchListPaginationQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RepoListFragment_repo\n    id\n  }\n}\n\nfragment RepoListFragment_repo on Repository {\n  name\n  nameWithOwner\n  url\n  description\n  pullRequests(first: 1, states: [OPEN]) {\n    totalCount\n  }\n  id\n}\n',
        },
    };
})();

(node as any).hash = 'c0b4f30c7e77ca8aba7f741805223513';

export default node;
