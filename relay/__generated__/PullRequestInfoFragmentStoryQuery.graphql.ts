/**
 * @generated SignedSource<<65a4066fd83dee56a872e08b0dca5ca6>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestInfoFragmentStoryQuery$variables = Record<PropertyKey, never>;
export type PullRequestInfoFragmentStoryQuery$data = {
    readonly node:
        | {
              readonly pr?:
                  | {
                        readonly ' $fragmentSpreads': FragmentRefs<'PullRequestInfo_pullRequest'>;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
};
export type PullRequestInfoFragmentStoryQuery = {
    response: PullRequestInfoFragmentStoryQuery$data;
    variables: PullRequestInfoFragmentStoryQuery$variables;
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
        };
    return {
        fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'PullRequestInfoFragmentStoryQuery',
            selections: [
                {
                    alias: null,
                    args: v0 /*:: as any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        {
                            kind: 'InlineFragment',
                            selections: [
                                {
                                    fragment: {
                                        kind: 'InlineFragment',
                                        selections: [
                                            {
                                                args: null,
                                                kind: 'FragmentSpread',
                                                name: 'PullRequestInfo_pullRequest',
                                            },
                                        ],
                                        type: 'PullRequest',
                                        abstractKey: null,
                                    },
                                    kind: 'AliasedInlineFragmentSpread',
                                    name: 'pr',
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
            name: 'PullRequestInfoFragmentStoryQuery',
            selections: [
                {
                    alias: null,
                    args: v0 /*:: as any*/,
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
                                    name: 'title',
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
                                    name: 'headRefOid',
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
            cacheID: 'c914fc9d8fe89787c78df72e62caae94',
            id: null,
            metadata: {
                relayTestingSelectionTypeInfo: {
                    node: {
                        enumValues: null,
                        nullable: true,
                        plural: false,
                        type: 'Node',
                    },
                    'node.__typename': v1 /*:: as any*/,
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
                    'node.number': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'Int',
                    },
                    'node.title': v1 /*:: as any*/,
                    'node.url': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'URI',
                    },
                },
            },
            name: 'PullRequestInfoFragmentStoryQuery',
            operationKind: 'query',
            text: 'query PullRequestInfoFragmentStoryQuery {\n  node(id: "pr-id") {\n    __typename\n    ... on PullRequest {\n      ...PullRequestInfo_pullRequest\n    }\n    id\n  }\n}\n\nfragment PullRequestInfo_pullRequest on PullRequest {\n  id\n  title\n  number\n  url\n  headRefOid\n}\n',
        },
    };
})();

(node as any).hash = 'efd8ff93c326c8b4248c307916bbb64c';

export default node;
