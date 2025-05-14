/**
 * @generated SignedSource<<b3bbaa6560c0ec07afe14843d7201ca1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserFragmentStoryQuery$variables = Record<PropertyKey, never>;
export type UserFragmentStoryQuery$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'UserFragment_user'>;
          }
        | null
        | undefined;
};
export type UserFragmentStoryQuery = {
    response: UserFragmentStoryQuery$data;
    variables: UserFragmentStoryQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                kind: 'Literal',
                name: 'id',
                value: 'test-id',
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
            name: 'UserFragmentStoryQuery',
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
                                    name: 'UserFragment_user',
                                },
                            ],
                            type: 'User',
                            abstractKey: null,
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
            name: 'UserFragmentStoryQuery',
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
                            ],
                            type: 'User',
                            abstractKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'id',
                            storageKey: null,
                        },
                    ],
                    storageKey: 'node(id:"test-id")',
                },
            ],
        },
        params: {
            cacheID: 'c3eabae88cfd940696f13f0fc3bc8a59',
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
                    'node.avatarUrl': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'URI',
                    },
                    'node.company': {
                        enumValues: null,
                        nullable: true,
                        plural: false,
                        type: 'String',
                    },
                    'node.id': {
                        enumValues: null,
                        nullable: false,
                        plural: false,
                        type: 'ID',
                    },
                    'node.login': v1 /*: any*/,
                },
            },
            name: 'UserFragmentStoryQuery',
            operationKind: 'query',
            text: 'query UserFragmentStoryQuery {\n  node(id: "test-id") {\n    __typename\n    ... on User {\n      ...UserFragment_user\n    }\n    id\n  }\n}\n\nfragment UserFragment_user on User {\n  login\n  company\n  avatarUrl\n}\n',
        },
    };
})();

(node as any).hash = '229258462933b4021003218dab26d320';

export default node;
