/**
 * @generated SignedSource<<748d7e9293b382d5b94387959dfeb9cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserRepo_repo$data = {
    readonly ' $fragmentSpreads': FragmentRefs<'Repo_repo' | 'BranchesTable_repo'>;
    readonly ' $fragmentType': 'UserRepo_repo';
};
export type UserRepo_repo$key = {
    readonly ' $data'?: UserRepo_repo$data;
    readonly ' $fragmentSpreads': FragmentRefs<'UserRepo_repo'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'UserRepo_repo',
    selections: [
        {
            args: null,
            kind: 'FragmentSpread',
            name: 'Repo_repo',
        },
        {
            args: null,
            kind: 'FragmentSpread',
            name: 'BranchesTable_repo',
        },
    ],
    type: 'GithubRepo',
    abstractKey: null,
};

(node as any).hash = '5c0c0330f2c716e49b7d5cd4b55ca32e';

export default node;
