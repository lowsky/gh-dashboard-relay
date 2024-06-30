/**
 * @generated SignedSource<<f86fc24d4565fdeb001549d0c44d40fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type User_user$data = {
    readonly avatar_url: string | null | undefined;
    readonly company: string | null | undefined;
    readonly login: string | null | undefined;
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
