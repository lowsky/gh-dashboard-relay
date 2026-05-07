/**
 * @generated SignedSource<<966986fcab0eba2049a07b9e3332ab77>>
 * @lightSyntaxTransform
 * @nogrep
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
              readonly user:
                  | {
                        readonly avatarUrl: any;
                        readonly login: string;
                        readonly name: string | null | undefined;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
    readonly authoredDate: any;
    readonly commitUrl: any;
    readonly message: string;
    readonly status:
        | {
              readonly commit:
                  | {
                        readonly oid: any;
                    }
                  | null
                  | undefined;
              readonly contexts: ReadonlyArray<{
                  readonly avatarUrl: any | null | undefined;
                  readonly context: string;
                  readonly creator:
                      | {
                            readonly login: string;
                        }
                      | null
                      | undefined;
                  readonly description: string | null | undefined;
                  readonly state: StatusState;
                  readonly targetUrl: any | null | undefined;
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
            name: 'avatarUrl',
            storageKey: null,
        },
        v1 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'login',
            storageKey: null,
        },
        v2 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'state',
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
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'id',
                        storageKey: null,
                    },
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
                            v0 /*: any*/,
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
                                selections: [v1 /*: any*/],
                                storageKey: null,
                            },
                            v2 /*: any*/,
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
                    v2 /*: any*/,
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
                    {
                        alias: null,
                        args: null,
                        concreteType: 'User',
                        kind: 'LinkedField',
                        name: 'user',
                        plural: false,
                        selections: [
                            v1 /*: any*/,
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'name',
                                storageKey: null,
                            },
                            v0 /*: any*/,
                        ],
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

(node as any).hash = '87150de4c1c7defd35908a82afe812a3';

export default node;
