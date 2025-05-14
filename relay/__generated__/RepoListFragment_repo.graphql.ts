/**
 * @generated SignedSource<<70db0f44392881ce2dff4ffa880fb3a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoListFragment_repo$data = {
    readonly description: string | null | undefined;
    readonly id: string;
    readonly name: string;
    readonly nameWithOwner: string;
    readonly pullRequests: {
        readonly totalCount: number;
    };
    readonly url: any;
    readonly ' $fragmentType': 'RepoListFragment_repo';
};
export type RepoListFragment_repo$key = {
    readonly ' $data'?: RepoListFragment_repo$data;
    readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_repo'>;
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
    name: 'RepoListFragment_repo',
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
            name: 'url',
            storageKey: null,
        },
        {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'description',
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

(node as any).hash = 'c0b4f30c7e77ca8aba7f741805223513';

export default node;
