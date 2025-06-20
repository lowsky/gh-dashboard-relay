/**
 * @generated SignedSource<<610cd253de49bcf9f2452c7d47f0fa63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestInfoStoryQuery$variables = Record<PropertyKey, never>;
export type PullRequestInfoStoryQuery$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'PullRequestMergeFragment_ref'>;
          }
        | null
        | undefined;
};
export type PullRequestInfoStoryQuery = {
    response: PullRequestInfoStoryQuery$data;
    variables: PullRequestInfoStoryQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            kind: 'Literal',
            name: 'id',
            value: 'test-id',
        },
    ];
    return {
        fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'PullRequestInfoStoryQuery',
            selections: [
                {
                    alias: null,
                    args: v0 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        {
                            args: null,
                            kind: 'FragmentSpread',
                            name: 'PullRequestMergeFragment_ref',
                        },
                    ],
                    storageKey: 'node(id:"test-id")',
                },
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'PullRequestInfoStoryQuery',
            selections: [
                {
                    alias: null,
                    args: v0 /*: any*/,
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
                                    name: 'headRefOid',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'number',
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
                                    name: 'title',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'mergeStateStatus',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'closed',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'isDraft',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'isInMergeQueue',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'mergeable',
                                    storageKey: null,
                                },
                            ],
                            type: 'PullRequest',
                            abstractKey: null,
                        },
                    ],
                    storageKey: 'node(id:"test-id")',
                },
            ],
        },
        params: {
            cacheID: '9092bae7611971ee9e67abf04f06c835',
            id: null,
            metadata: {},
            name: 'PullRequestInfoStoryQuery',
            operationKind: 'query',
            text: 'query PullRequestInfoStoryQuery {\n  node(id: "test-id") {\n    __typename\n    ...PullRequestMergeFragment_ref\n    id\n  }\n}\n\nfragment PullRequestMergeFragment_ref on PullRequest {\n  id\n  headRefOid\n  number\n  url\n  title\n  mergeStateStatus\n  closed\n  isDraft\n  isInMergeQueue\n  mergeable\n}\n',
        },
    };
})();

(node as any).hash = '62dc7e6471a86f5dbc521a1f97265a99';

export default node;
