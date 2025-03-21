/**
 * @generated SignedSource<<049d0c4dc213090ec85da56b62d00169>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type CommitWithStatuses_commit$data = {
    readonly date: string | null | undefined;
    readonly message: string | null | undefined;
    readonly sha: string | null | undefined;
    readonly status:
        | ReadonlyArray<
              | {
                    readonly avatar_url: string | null | undefined;
                    readonly context: string | null | undefined;
                    readonly description: string | null | undefined;
                    readonly state: string | null | undefined;
                    readonly target_url: string | null | undefined;
                    readonly updated_at: string | null | undefined;
                }
              | null
              | undefined
          >
        | null
        | undefined;
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
