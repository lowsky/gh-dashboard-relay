/**
 * @generated SignedSource<<feb79aa941a1b74b7d5a84a2d2a116ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoListFragment_user$data = {
    readonly id: string;
    readonly repositories: {
        readonly edges:
            | ReadonlyArray<
                  | {
                        readonly node:
                            | {
                                  readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_repo'>;
                              }
                            | null
                            | undefined;
                    }
                  | null
                  | undefined
              >
            | null
            | undefined;
        readonly totalCount: number;
    };
    readonly ' $fragmentType': 'RepoListFragment_user';
};
export type RepoListFragment_user$key = {
    readonly ' $data'?: RepoListFragment_user$data;
    readonly ' $fragmentSpreads': FragmentRefs<'RepoListFragment_user'>;
};

import RepoListPaginationQuery_graphql from './RepoListPaginationQuery.graphql';

const node: ReaderFragment = (function () {
    var v0 = ['repositories'];
    return {
        argumentDefinitions: [
            {
                defaultValue: 10,
                kind: 'LocalArgument',
                name: 'count',
            },
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'cursor',
            },
        ],
        kind: 'Fragment',
        metadata: {
            connection: [
                {
                    count: 'count',
                    cursor: 'cursor',
                    direction: 'forward',
                    path: v0 /*: any*/,
                },
            ],
            refetch: {
                connection: {
                    forward: {
                        count: 'count',
                        cursor: 'cursor',
                    },
                    backward: null,
                    path: v0 /*: any*/,
                },
                fragmentPathInResult: ['node'],
                operation: RepoListPaginationQuery_graphql,
                identifierInfo: {
                    identifierField: 'id',
                    identifierQueryVariableName: 'id',
                },
            },
        },
        name: 'RepoListFragment_user',
        selections: [
            {
                alias: 'repositories',
                args: [
                    {
                        kind: 'Literal',
                        name: 'orderBy',
                        value: {
                            direction: 'ASC',
                            field: 'NAME',
                        },
                    },
                    {
                        kind: 'Literal',
                        name: 'ownerAffiliations',
                        value: ['OWNER'],
                    },
                ],
                concreteType: 'RepositoryConnection',
                kind: 'LinkedField',
                name: '__RepoList_user_repositories_connection',
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: 'RepositoryEdge',
                        kind: 'LinkedField',
                        name: 'edges',
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Repository',
                                kind: 'LinkedField',
                                name: 'node',
                                plural: false,
                                selections: [
                                    {
                                        args: null,
                                        kind: 'FragmentSpread',
                                        name: 'RepoListFragment_repo',
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: '__typename',
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'cursor',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'totalCount',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'PageInfo',
                        kind: 'LinkedField',
                        name: 'pageInfo',
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'endCursor',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'hasNextPage',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                storageKey:
                    '__RepoList_user_repositories_connection(orderBy:{"direction":"ASC","field":"NAME"},ownerAffiliations:["OWNER"])',
            },
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'id',
                storageKey: null,
            },
        ],
        type: 'User',
        abstractKey: null,
    };
})();

(node as any).hash = '8b011f745da72b23419d1f6b6f161b2b';

export default node;
