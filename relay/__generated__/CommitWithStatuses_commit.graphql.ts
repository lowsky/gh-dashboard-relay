/**
 * @generated SignedSource<<1acd1f1bb290b3a39ec59ef1a6f8d8d5>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type StatusState = 'ERROR' | 'EXPECTED' | 'FAILURE' | 'PENDING' | 'SUCCESS' | '%future added value';
import { FragmentRefs } from 'relay-runtime';
export type CommitWithStatuses_commit$data = {
    readonly author:
        | {
              readonly avatarUrl: string;
              readonly email: string | null | undefined;
              readonly name: string | null | undefined;
              readonly user:
                  | {
                        readonly avatarUrl: string;
                        readonly id: string;
                        readonly login: string;
                        readonly name: string | null | undefined;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
    readonly authoredDate: Date;
    readonly commitUrl: string;
    readonly message: string;
    readonly status:
        | {
              readonly commit:
                  | {
                        readonly oid: string;
                    }
                  | null
                  | undefined;
              readonly contexts: ReadonlyArray<{
                  readonly avatarUrl: string | null | undefined;
                  readonly context: string;
                  readonly creator:
                      | {
                            readonly login: string;
                        }
                      | null
                      | undefined;
                  readonly description: string | null | undefined;
                  readonly state: StatusState;
                  readonly targetUrl: string | null | undefined;
              }>;
              readonly id: string;
              readonly state: StatusState;
          }
        | null
        | undefined;
    readonly ' $fragmentType': 'CommitWithStatuses_commit';
};
export type CommitWithStatuses_commit$key = {
    readonly ' $data'?: CommitWithStatuses_commit$data;
    readonly ' $fragmentSpreads': FragmentRefs<'CommitWithStatuses_commit'>;
};

const node: ReaderFragment = (function () {
    var v0 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
        },
        v1 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'avatarUrl',
            storageKey: null,
        },
        v2 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'login',
            storageKey: null,
        },
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'state',
            storageKey: null,
        },
        v4 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        };
    return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'CommitWithStatuses_commit',
        selections: [
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'authoredDate',
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                concreteType: 'Status',
                kind: 'LinkedField',
                name: 'status',
                plural: false,
                selections: [
                    v0 /*:: as any*/,
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Commit',
                        kind: 'LinkedField',
                        name: 'commit',
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'oid',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'StatusContext',
                        kind: 'LinkedField',
                        name: 'contexts',
                        plural: true,
                        selections: [
                            v1 /*:: as any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'context',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'creator',
                                plural: false,
                                selections: [v2 /*:: as any*/],
                                storageKey: null,
                            },
                            v3 /*:: as any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'description',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'targetUrl',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    v3 /*:: as any*/,
                ],
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'commitUrl',
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'message',
                storageKey: null,
            },
            {
                alias: null,
                args: null,
                concreteType: 'GitActor',
                kind: 'LinkedField',
                name: 'author',
                plural: false,
                selections: [
                    v4 /*:: as any*/,
                    v1 /*:: as any*/,
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'email',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'User',
                        kind: 'LinkedField',
                        name: 'user',
                        plural: false,
                        selections: [v0 /*:: as any*/, v2 /*:: as any*/, v4 /*:: as any*/, v1 /*:: as any*/],
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ],
        type: 'Commit',
        abstractKey: null,
    };
})();

(node as any).hash = '5fc4bada1260c066f5a3130fe5c95a98';

export default node;
