/**
 * @generated SignedSource<<d4cfd25a56570a7f1b3d2028f7b2bd1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoItemFragment_repoy$data = {
    readonly id: string;
    readonly isFork: boolean;
    readonly name: string;
    readonly nameWithOwner: string;
    readonly pullRequests: {
        readonly totalCount: number;
    };
    readonly url: any;
    readonly ' $fragmentType': 'RepoItemFragment_repoy';
};
export type RepoItemFragment_repoy$key = {
    readonly ' $data'?: RepoItemFragment_repoy$data;
    readonly ' $fragmentSpreads': FragmentRefs<'RepoItemFragment_repoy'>;
};

import RepoBranchListPaginationQuery_graphql from './RepoBranchListPaginationQuery.graphql';

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: {
        refetch: {
            connection: null,
            fragmentPathInResult: ['node'],
            operation: RepoBranchListPaginationQuery_graphql,
            identifierInfo: {
                identifierField: 'id',
                identifierQueryVariableName: 'id',
            },
        },
    },
    name: 'RepoItemFragment_repoy',
    selections: [
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'nameWithOwner',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'isFork',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'url',
            storageKey: null,
        },
        {
            alias: null,
            args: [
                {
                    kind: 'Literal',
                    name: 'first',
                    value: 1,
                },
                {
                    kind: 'Literal',
                    name: 'states',
                    value: ['OPEN'],
                },
            ],
            concreteType: 'PullRequestConnection',
            kind: 'LinkedField',
            name: 'pullRequests',
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'totalCount',
                    storageKey: null,
                },
            ],
            storageKey: 'pullRequests(first:1,states:["OPEN"])',
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
        },
    ],
    type: 'Repository',
    abstractKey: null,
};

(node as any).hash = '22e49767a8c3773cc2e2e55a031be5c0';

export default node;
