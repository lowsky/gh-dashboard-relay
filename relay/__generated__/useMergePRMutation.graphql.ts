/**
 * @generated SignedSource<<620a89c7725cf698bd05e3936ea21c51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
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
export type PullRequestMergeMethod = 'MERGE' | 'REBASE' | 'SQUASH' | '%future added value';
export type PullRequestState = 'CLOSED' | 'MERGED' | 'OPEN' | '%future added value';
export type MergePullRequestInput = {
    authorEmail?: string | null | undefined;
    clientMutationId?: string | null | undefined;
    commitBody?: string | null | undefined;
    commitHeadline?: string | null | undefined;
    expectedHeadOid?: any | null | undefined;
    mergeMethod?: PullRequestMergeMethod | null | undefined;
    pullRequestId: string;
};
export type useMergePRMutation$variables = {
    input: MergePullRequestInput;
};
export type useMergePRMutation$data = {
    readonly mergePullRequest:
        | {
              readonly pullRequest:
                  | {
                        readonly mergeStateStatus: MergeStateStatus;
                        readonly merged: boolean;
                        readonly state: PullRequestState;
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
};
export type useMergePRMutation = {
    response: useMergePRMutation$data;
    variables: useMergePRMutation$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'input',
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
            },
        ],
        v2 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'merged',
            storageKey: null,
        },
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'state',
            storageKey: null,
        },
        v4 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'mergeStateStatus',
            storageKey: null,
        };
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'useMergePRMutation',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: 'MergePullRequestPayload',
                    kind: 'LinkedField',
                    name: 'mergePullRequest',
                    plural: false,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: 'PullRequest',
                            kind: 'LinkedField',
                            name: 'pullRequest',
                            plural: false,
                            selections: [v2 /*: any*/, v3 /*: any*/, v4 /*: any*/],
                            storageKey: null,
                        },
                    ],
                    storageKey: null,
                },
            ],
            type: 'Mutation',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Operation',
            name: 'useMergePRMutation',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: 'MergePullRequestPayload',
                    kind: 'LinkedField',
                    name: 'mergePullRequest',
                    plural: false,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: 'PullRequest',
                            kind: 'LinkedField',
                            name: 'pullRequest',
                            plural: false,
                            selections: [
                                v2 /*: any*/,
                                v3 /*: any*/,
                                v4 /*: any*/,
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'id',
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    storageKey: null,
                },
            ],
        },
        params: {
            cacheID: '1ee388a800b801d12555f2d15d81ae7b',
            id: null,
            metadata: {},
            name: 'useMergePRMutation',
            operationKind: 'mutation',
            text: 'mutation useMergePRMutation(\n  $input: MergePullRequestInput!\n) {\n  mergePullRequest(input: $input) {\n    pullRequest {\n      merged\n      state\n      mergeStateStatus\n      id\n    }\n  }\n}\n',
        },
    };
})();

(node as any).hash = 'baefd5006707a706ec9d17cf49976b4b';

export default node;
