/**
 * @generated SignedSource<<51e81166805d7d9ea4b54d4f301ee7a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestInfo_pullRequest$data = {
    readonly html_url: string | null | undefined;
    readonly number: number;
    readonly title: string | null | undefined;
    readonly ' $fragmentType': 'PullRequestInfo_pullRequest';
};
export type PullRequestInfo_pullRequest$key = {
    readonly ' $data'?: PullRequestInfo_pullRequest$data;
    readonly ' $fragmentSpreads': FragmentRefs<'PullRequestInfo_pullRequest'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'PullRequestInfo_pullRequest',
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
            name: 'html_url',
            storageKey: null,
        },
    ],
    type: 'PullRequest',
    abstractKey: null,
};

(node as any).hash = 'd62c5446f2b2314b7f781cc50ef23bda';

export default node;
