/**
 * @generated SignedSource<<4ed6ba544319d824c0f29f871bdc6b36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestMergeFragmentStoryQuery$variables = Record<PropertyKey, never>;
export type PullRequestMergeFragmentStoryQuery$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'PullRequestMergeFragment_ref'>;
          }
        | null
        | undefined;
};
export type PullRequestMergeFragmentStoryQuery = {
    response: PullRequestMergeFragmentStoryQuery$data;
    variables: PullRequestMergeFragmentStoryQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                kind: 'Literal',
                name: 'id',
                value: 'pr-id',
            },
        ],
        v1 = {
            enumValues: null,
            nullable: false,
            plural: false,
            type: 'String',
        },
        v2 = {
            enumValues: null,
            nullable: false,
            plural: false,
            type: 'Boolean',
        };
    return {
        fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'PullRequestMergeFragmentStoryQuery',
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
                            kind: 'InlineFragment',
                            selections: [
                                {
                                    args: null,
                                    kind: 'FragmentSpread',
                                    name: 'PullRequestMergeFragment_ref',
                                },
                            ],
                            type: 'PullRequest',
                            abstractKey: null,
                        },
                    ],
                    storageKey: 'node(id:"pr-id")',
                },
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'PullRequestMergeFragmentStoryQuery',
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
                                    name: 'merged',
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
                    storageKey: 'node(id:"pr-id")',
                },
            ],
        },
        params: {
            cacheID: 'dbf519e8c5d1fefc8ada7306d27f3488',
            id: null,
            metadata: {
                relayTestingSelectionTypeInfo: {
                    node: {
                        enumValues: null,
                        nullable: true,
                        plural: false,
                        type: 'Node',
                    },
                    'node.__typename': v1 /*: any*/,
                    'node.closed': v2 /*: any*/,
                    'node.headRefOid': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'GitObjectID',
                    },
                    'node.id': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'ID',
                    },
                    'node.isDraft': v2 /*: any*/,
                    'node.mergeStateStatus': {
                        enumValues: [
                            'BEHIND',
                            'BLOCKED',
                            'CLEAN',
                            'DIRTY',
                            'DRAFT',
                            'HAS_HOOKS',
                            'UNKNOWN',
                            'UNSTABLE',
                        ],
                        nullable: false,
                        plural: false,
                        type: 'MergeStateStatus',
                    },
                    'node.mergeable': {
                        enumValues: ['CONFLICTING', 'MERGEABLE', 'UNKNOWN'],
                        nullable: false,
                        plural: false,
                        type: 'MergeableState',
                    },
                    'node.merged': v2 /*: any*/,
                    'node.number': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'Int',
                    },
                    'node.title': v1 /*: any*/,
                    'node.url': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'URI',
                    },
                },
            },
            name: 'PullRequestMergeFragmentStoryQuery',
            operationKind: 'query',
            text: 'query PullRequestMergeFragmentStoryQuery {\n  node(id: "pr-id") {\n    __typename\n    ... on PullRequest {\n      ...PullRequestMergeFragment_ref\n    }\n    id\n  }\n}\n\nfragment PullRequestMergeFragment_ref on PullRequest {\n  id\n  headRefOid\n  number\n  url\n  title\n  mergeStateStatus\n  closed\n  isDraft\n  merged\n  mergeable\n}\n',
        },
    };
})();

(node as any).hash = '390bd2302dad90891b14e011d518ce7f';

export default node;
