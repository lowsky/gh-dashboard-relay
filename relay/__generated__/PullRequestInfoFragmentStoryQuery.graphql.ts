/**
 * @generated SignedSource<<008d99e8d512a2a0f9f712f57a922af2>>
 * @lightSyntaxTransform
 * @nogrep
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
              readonly ' $fragmentSpreads': FragmentRefs<'PullRequestInfo_pullRequest'>;
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
                                    name: 'PullRequestInfo_pullRequest',
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
                    'node.__typename': v1 /*: any*/,
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
                    'node.title': v1 /*: any*/,
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

(node as any).hash = '391ce84efd7ba0174b0ec9bc5b5bd496';

export default node;
