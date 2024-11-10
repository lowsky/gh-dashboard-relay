/**
 * @generated SignedSource<<9b55e8b915b22012fe7005225e1a4aca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserRepo_repo$data = {
    readonly ' $fragmentSpreads': FragmentRefs<'BranchesTable_repo' | 'Repo_repo'>;
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
