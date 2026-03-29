/**
 * @generated SignedSource<<cddcfdf958e3ef31acee6c0ece788e49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoItemRefetchFragment$variables = {
    id: string;
};
export type RepoItemRefetchFragment$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'RepoItemFragment_repo'>;
          }
        | null
        | undefined;
};
export type RepoItemRefetchFragment = {
    response: RepoItemRefetchFragment$data;
    variables: RepoItemRefetchFragment$variables;
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
            name: 'RepoItemRefetchFragment',
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
                            name: 'RepoItemFragment_repo',
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
            name: 'RepoItemRefetchFragment',
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
            cacheID: 'e1eb425309787030df3025708014daad',
            id: null,
            metadata: {},
            name: 'RepoItemRefetchFragment',
            operationKind: 'query',
            text: 'query RepoItemRefetchFragment(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RepoItemFragment_repo\n    id\n  }\n}\n\nfragment RepoItemFragment_repo on Repository {\n  name\n  nameWithOwner\n  isFork\n  url\n  pullRequests(first: 1, states: [OPEN]) {\n    totalCount\n  }\n  id\n}\n',
        },
    };
})();

(node as any).hash = 'cb35e44231761c3f3eae507791fa4336';

export default node;
