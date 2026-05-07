/**
 * @generated SignedSource<<f668e58983ccd4aa0cc54f1c250404c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MergeStateStatus =
    | 'BEHIND'
    | 'BLOCKED'
    | 'CLEAN'
    | 'DIRTY'
    | 'DRAFT'
    | 'HAS_HOOKS'
    | 'UNKNOWN'
    | 'UNSTABLE'
    | '%future added value';
export type MergeableState = 'CONFLICTING' | 'MERGEABLE' | 'UNKNOWN' | '%future added value';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestMergeFragment_ref$data = {
    readonly closed: boolean;
    readonly headRefOid: any;
    readonly id: string;
    readonly isDraft: boolean;
    readonly mergeStateStatus: MergeStateStatus;
    readonly mergeable: MergeableState;
    readonly merged: boolean;
    readonly number: number;
    readonly title: string;
    readonly url: any;
    readonly ' $fragmentType': 'PullRequestMergeFragment_ref';
};
export type PullRequestMergeFragment_ref$key = {
    readonly ' $data'?: PullRequestMergeFragment_ref$data;
    readonly ' $fragmentSpreads': FragmentRefs<'PullRequestMergeFragment_ref'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'PullRequestMergeFragment_ref',
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
};

(node as any).hash = '069c728e73c3c1802f893aea4fc325da';

export default node;
