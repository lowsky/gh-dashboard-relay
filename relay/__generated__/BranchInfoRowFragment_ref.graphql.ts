/**
 * @generated SignedSource<<2f6c20e2721f8007e9dff0b54c0382b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BranchInfoRowFragment_ref$data = {
    readonly associatedPullRequests: {
        readonly edges:
            | ReadonlyArray<
                  | {
                        readonly node:
                            | {
                                  readonly id: string;
                                  readonly ' $fragmentSpreads': FragmentRefs<'PullRequestMergeFragment_ref'>;
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
                                    name: 'id',
                                    storageKey: null,
                                },
                                {
                                    args: null,
                                    kind: 'FragmentSpread',
                                    name: 'PullRequestMergeFragment_ref',
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

(node as any).hash = 'aaeea5298b83e9c444881c5772898bda';

export default node;
