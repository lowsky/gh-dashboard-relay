/**
 * @generated SignedSource<<560dec67f9ca00e894d17ace51f47952>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type BranchFragment_branch$data = {
    readonly associatedPullRequests: {
        readonly nodes:
            | ReadonlyArray<
                  | {
                        readonly headRefName: string;
                        readonly title: string;
                    }
                  | null
                  | undefined
              >
            | null
            | undefined;
        readonly totalCount: number;
    };
    readonly id: string;
    readonly name: string;
    readonly target:
        | {
              readonly commitUrl: any;
              readonly message?: string;
              readonly oid: any;
              readonly status?:
                  | {
                        readonly combinedContexts: {
                            readonly totalCount: number;
                        };
                        readonly contexts: ReadonlyArray<{
                            readonly context: string;
                        }>;
                        readonly id: string;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
    readonly ' $fragmentType': 'BranchFragment_branch';
};
export type BranchFragment_branch$key = {
    readonly ' $data'?: BranchFragment_branch$data;
    readonly ' $fragmentSpreads': FragmentRefs<'BranchFragment_branch'>;
};

const node: ReaderFragment = (function () {
    var v0 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
        },
        v1 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'totalCount',
            storageKey: null,
        };
    return {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'BranchFragment_branch',
        selections: [
            {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'name',
                storageKey: null,
            },
            v0 /*: any*/,
            {
                alias: null,
                args: [
                    {
                        kind: 'Literal',
                        name: 'first',
                        value: 2,
                    },
                ],
                concreteType: 'PullRequestConnection',
                kind: 'LinkedField',
                name: 'associatedPullRequests',
                plural: false,
                selections: [
                    v1 /*: any*/,
                    {
                        alias: null,
                        args: null,
                        concreteType: 'PullRequest',
                        kind: 'LinkedField',
                        name: 'nodes',
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'headRefName',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'title',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                storageKey: 'associatedPullRequests(first:2)',
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
                        kind: 'InlineFragment',
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'message',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: 'Status',
                                kind: 'LinkedField',
                                name: 'status',
                                plural: false,
                                selections: [
                                    v0 /*: any*/,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: 'StatusCheckRollupContextConnection',
                                        kind: 'LinkedField',
                                        name: 'combinedContexts',
                                        plural: false,
                                        selections: [v1 /*: any*/],
                                        storageKey: null,
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: 'StatusContext',
                                        kind: 'LinkedField',
                                        name: 'contexts',
                                        plural: true,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'context',
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: 'Commit',
                        abstractKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'commitUrl',
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'oid',
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ],
        type: 'Ref',
        abstractKey: null,
    };
})();

(node as any).hash = '6cead3614de840287debc24a177e23a8';

export default node;
