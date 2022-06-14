/**
 * @generated SignedSource<<b25e29b461750ecf80b7a479faa11416>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserRepo_user$data = {
    readonly ' $fragmentSpreads': FragmentRefs<'User_user'>;
    readonly ' $fragmentType': 'UserRepo_user';
};
export type UserRepo_user$key = {
    readonly ' $data'?: UserRepo_user$data;
    readonly ' $fragmentSpreads': FragmentRefs<'UserRepo_user'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'UserRepo_user',
    selections: [
        {
            args: null,
            kind: 'FragmentSpread',
            name: 'User_user',
        },
    ],
    type: 'GithubUser',
    abstractKey: null,
};

(node as any).hash = '379b8d38c536da91adcc8b89a311ef6b';

export default node;
