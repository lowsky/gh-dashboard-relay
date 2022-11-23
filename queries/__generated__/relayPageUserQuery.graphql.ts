/**
 * @generated SignedSource<<8727ef1618352014339a1a08108df2ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type relayPageUserQuery$variables = {
    userName: string;
};
export type relayPageUserQuery$data = {
    readonly user: {
        readonly ' $fragmentSpreads': FragmentRefs<'UserRepo_user'>;
    } | null;
};
export type relayPageUserQuery = {
    response: relayPageUserQuery$data;
    variables: relayPageUserQuery$variables;
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
                name: 'username',
                variableName: 'userName',
            },
        ];
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'relayPageUserQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: 'GithubUser',
                    kind: 'LinkedField',
                    name: 'user',
                    plural: false,
                    selections: [
                        {
                            kind: 'Defer',
                            selections: [
                                {
                                    args: null,
                                    kind: 'FragmentSpread',
                                    name: 'UserRepo_user',
                                },
                            ],
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
            name: 'relayPageUserQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: 'GithubUser',
                    kind: 'LinkedField',
                    name: 'user',
                    plural: false,
                    selections: [
                        {
                            if: null,
                            kind: 'Defer',
                            label: 'relayPageUserQuery$defer$UserRepo_user',
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
                                    name: 'avatar_url',
                                    storageKey: null,
                                },
                            ],
                        },
                    ],
                    storageKey: null,
                },
            ],
        },
        params: {
            cacheID: 'd29eaa0cd0e512430eac711ba6407a99',
            id: null,
            metadata: {},
            name: 'relayPageUserQuery',
            operationKind: 'query',
            text: 'query relayPageUserQuery(\n  $userName: String!\n) {\n  user(username: $userName) {\n    ...UserRepo_user @defer(label: "relayPageUserQuery$defer$UserRepo_user")\n  }\n}\n\nfragment UserRepo_user on GithubUser {\n  ...User_user\n}\n\nfragment User_user on GithubUser {\n  login\n  company\n  avatar_url\n}\n',
        },
    };
})();

(node as any).hash = 'f779467850171e8f96021d91c3c6f43c';

export default node;
