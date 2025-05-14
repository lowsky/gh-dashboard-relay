/**
 * @generated SignedSource<<9544f3f8f9e04d1c3bcb1f3a757f31c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserWithReposFragment_user$data = {
    readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_user' | 'UserFragment_user'>;
    readonly ' $fragmentType': 'UserWithReposFragment_user';
};
export type UserWithReposFragment_user$key = {
    readonly ' $data'?: UserWithReposFragment_user$data;
    readonly ' $fragmentSpreads': FragmentRefs<'UserWithReposFragment_user'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'UserWithReposFragment_user',
    selections: [
        {
            args: null,
            kind: 'FragmentSpread',
            name: 'UserFragment_user',
        },
        {
            args: null,
            kind: 'FragmentSpread',
            name: 'RepoListFragment_user',
        },
    ],
    type: 'User',
    abstractKey: null,
};

(node as any).hash = 'f14c1c930fde13fc4606154d52efacce';

export default node;
