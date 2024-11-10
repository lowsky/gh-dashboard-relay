/**
 * @generated SignedSource<<55a19d02e76a70d5966069414d57ef58>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type PullRequestInfo_pullRequest$data = {
    readonly head: {
        readonly sha: string;
    };
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
        {
            alias: null,
            args: null,
            concreteType: 'GithubGitTip',
            kind: 'LinkedField',
            name: 'head',
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'sha',
                    storageKey: null,
                },
            ],
            storageKey: null,
        },
    ],
    type: 'PullRequest',
    abstractKey: null,
};

(node as any).hash = 'b8faa5cf2e317681fd2fc6a5dee8d3f3';

export default node;
