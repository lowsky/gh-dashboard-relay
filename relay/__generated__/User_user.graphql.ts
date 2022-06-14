/**
 * @generated SignedSource<<c323356545b2405f21bb5e3e0779640c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type User_user$data = {
    readonly login: string | null;
    readonly company: string | null;
    readonly avatar_url: string | null;
    readonly ' $fragmentType': 'User_user';
};
export type User_user$key = {
    readonly ' $data'?: User_user$data;
    readonly ' $fragmentSpreads': FragmentRefs<'User_user'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'User_user',
    selections: [
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'login',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'company',
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
    type: 'GithubUser',
    abstractKey: null,
};

(node as any).hash = '3c8e54b55d329d4240245369a0c42524';

export default node;
