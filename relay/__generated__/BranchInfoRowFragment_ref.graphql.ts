/**
 * @generated SignedSource<<df34625cb9fa299be83875a4426f5087>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MergeStateStatus =
    | 'BEHIND'
    | 'BLOCKED'
    | 'CLEAN'
    | 'DIRTY'
    | 'DRAFT'
    | 'HAS_HOOKS'
    | 'UNKNOWN'
    | 'UNSTABLE'
    | '%future added value';
export type MergeableState = 'CONFLICTING' | 'MERGEABLE' | 'UNKNOWN' | '%future added value';
import { FragmentRefs } from 'relay-runtime';
export type BranchInfoRowFragment_ref$data = {
    readonly associatedPullRequests: {
        readonly edges:
            | ReadonlyArray<
                  | {
                        readonly node:
                            | {
                                  readonly closed: boolean;
                                  readonly headRefOid: any;
                                  readonly isDraft: boolean;
                                  readonly isInMergeQueue: boolean;
                                  readonly locked: boolean;
                                  readonly mergeStateStatus: MergeStateStatus;
                                  readonly mergeable: MergeableState;
                                  readonly merged: boolean;
                                  readonly number: number;
                                  readonly title: string;
                                  readonly url: any;
                              }
                            | null
                            | undefined;
                    }
                  | null
                  | undefined
              >
            | null
            | undefined;
    };
    readonly name: string;
    readonly target:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'CommitWithStatuses_commit'>;
          }
        | null
        | undefined;
    readonly ' $fragmentType': 'BranchInfoRowFragment_ref';
};
export type BranchInfoRowFragment_ref$key = {
    readonly ' $data'?: BranchInfoRowFragment_ref$data;
    readonly ' $fragmentSpreads': FragmentRefs<'BranchInfoRowFragment_ref'>;
};

const node: ReaderFragment = {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'BranchInfoRowFragment_ref',
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
            concreteType: null,
            kind: 'LinkedField',
            name: 'target',
            plural: false,
            selections: [
                {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'CommitWithStatuses_commit',
                },
            ],
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
            name: 'associatedPullRequests',
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: 'PullRequestEdge',
                    kind: 'LinkedField',
                    name: 'edges',
                    plural: true,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: 'PullRequest',
                            kind: 'LinkedField',
                            name: 'node',
                            plural: false,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'headRefOid',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'number',
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
                                    name: 'title',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'mergeStateStatus',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'closed',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'isDraft',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'isInMergeQueue',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'mergeable',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'merged',
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'locked',
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    storageKey: null,
                },
            ],
            storageKey: 'associatedPullRequests(first:1,states:["OPEN"])',
        },
    ],
    type: 'Ref',
    abstractKey: null,
};

(node as any).hash = '79e5abdfeaf148175ca090f50e1e8406';

export default node;
