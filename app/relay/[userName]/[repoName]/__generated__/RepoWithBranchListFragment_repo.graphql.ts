/**
 * @generated SignedSource<<7753afb01bf5c8cb8e376cce6d15e98b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoWithBranchListFragment_repo$data = {
    readonly branches:
        | {
              readonly edges:
                  | ReadonlyArray<
                        | {
                              readonly node:
                                  | {
                                        readonly ' $fragmentSpreads': FragmentRefs<'BranchInfoRowFragment_ref'>;
                                    }
                                  | null
                                  | undefined;
                          }
                        | null
                        | undefined
                    >
                  | null
                  | undefined;
          }
        | null
        | undefined;
    readonly id: string;
    readonly ' $fragmentType': 'RepoWithBranchListFragment_repo';
};
export type RepoWithBranchListFragment_repo$key = {
    readonly ' $data'?: RepoWithBranchListFragment_repo$data;
    readonly ' $fragmentSpreads': FragmentRefs<'RepoWithBranchListFragment_repo'>;
};

import RepoWithBranchPaginationQuery_graphql from './RepoWithBranchPaginationQuery.graphql';

const node: ReaderFragment = (function () {
    var v0 = ['branches'];
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
                operation: RepoWithBranchPaginationQuery_graphql,
                identifierInfo: {
                    identifierField: 'id',
                    identifierQueryVariableName: 'id',
                },
            },
        },
        name: 'RepoWithBranchListFragment_repo',
        selections: [
            {
                alias: 'branches',
                args: [
                    {
                        kind: 'Literal',
                        name: 'refPrefix',
                        value: 'refs/heads/',
                    },
                ],
                concreteType: 'RefConnection',
                kind: 'LinkedField',
                name: '__RepoWithBranchList_repositories_branches_connection',
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: 'RefEdge',
                        kind: 'LinkedField',
                        name: 'edges',
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Ref',
                                kind: 'LinkedField',
                                name: 'node',
                                plural: false,
                                selections: [
                                    {
                                        args: null,
                                        kind: 'FragmentSpread',
                                        name: 'BranchInfoRowFragment_ref',
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
                storageKey: '__RepoWithBranchList_repositories_branches_connection(refPrefix:"refs/heads/")',
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
})();

(node as any).hash = '952626d02325330fe463526370bd6d4d';

export default node;
