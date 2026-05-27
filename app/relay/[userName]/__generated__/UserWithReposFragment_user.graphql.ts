/**
 * @generated SignedSource<<cfd318a2afda5261eab468cb6c3c05ab>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type UserWithReposFragment_user$data = {
    readonly repoList: {
        readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_user'>;
    };
    readonly user: {
        readonly ' $fragmentSpreads': FragmentRefs<'UserFragment_user'>;
    };
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
            fragment: {
                kind: 'InlineFragment',
                selections: [
                    {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'UserFragment_user',
                    },
                ],
                type: 'User',
                abstractKey: null,
            },
            kind: 'AliasedInlineFragmentSpread',
            name: 'user',
        },
        {
            fragment: {
                kind: 'InlineFragment',
                selections: [
                    {
                        args: null,
                        kind: 'FragmentSpread',
                        name: 'RepoListFragment_user',
                    },
                ],
                type: 'User',
                abstractKey: null,
            },
            kind: 'AliasedInlineFragmentSpread',
            name: 'repoList',
        },
    ],
    type: 'User',
    abstractKey: null,
};

(node as any).hash = 'a3b99b1edb2356fbdc970fa881cb65a8';

export default node;
