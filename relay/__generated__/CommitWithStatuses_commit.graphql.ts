/**
 * @generated SignedSource<<20fc1e8da2676c9a6010338bb83ee811>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type CommitWithStatuses_commit$data = {
    readonly date: string | null;
    readonly message: string | null;
    readonly sha: string | null;
    readonly status: ReadonlyArray<{
        readonly avatar_url: string | null;
        readonly context: string | null;
        readonly description: string | null;
        readonly state: string | null;
        readonly target_url: string | null;
        readonly updated_at: string | null;
    } | null> | null;
    readonly ' $fragmentType': 'CommitWithStatuses_commit';
};
export type CommitWithStatuses_commit$key = {
    readonly ' $data'?: CommitWithStatuses_commit$data;
    readonly ' $fragmentSpreads': FragmentRefs<'CommitWithStatuses_commit'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'CommitWithStatuses_commit',
    selections: [
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'sha',
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
            kind: 'ScalarField',
            name: 'date',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            concreteType: 'GithubStatus',
            kind: 'LinkedField',
            name: 'status',
            plural: true,
            selections: [
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
                    kind: 'ScalarField',
                    name: 'description',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'state',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'target_url',
                    storageKey: null,
                },
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'updated_at',
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
            storageKey: null,
        },
    ],
    type: 'GithubCommit',
    abstractKey: null,
};

(node as any).hash = '0a23222cea2c4545dc4b5539933a7883';

export default node;
