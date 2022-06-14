/**
 * @generated SignedSource<<eaa9386afcb1fbf1736065e3916b3dd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestInfo_pullRequest$data = {
    readonly title: string | null;
    readonly number: number;
    readonly url: string | null;
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
            name: 'url',
            storageKey: null,
        },
    ],
    type: 'PullRequest',
    abstractKey: null,
};

(node as any).hash = 'de2f3d1a0ae4ea5d8149d019de0b066d';

export default node;
