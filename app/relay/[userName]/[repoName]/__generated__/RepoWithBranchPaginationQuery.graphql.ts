/**
 * @generated SignedSource<<ba77ab20f6d7e74ac527a679a6a58118>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type RepoWithBranchPaginationQuery$variables = {
    count?: number | null | undefined;
    cursor?: string | null | undefined;
    id: string;
};
export type RepoWithBranchPaginationQuery$data = {
    readonly node:
        | {
              readonly ' $fragmentSpreads': FragmentRefs<'RepoWithBranchListFragment_repo'>;
          }
        | null
        | undefined;
};
export type RepoWithBranchPaginationQuery = {
    response: RepoWithBranchPaginationQuery$data;
    variables: RepoWithBranchPaginationQuery$variables;
};

const node: ConcreteRequest = (function () {
    var v0 = [
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
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'id',
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'id',
                variableName: 'id',
            },
        ],
        v2 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: '__typename',
            storageKey: null,
        },
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
        },
        v4 = [
            {
                kind: 'Variable',
                name: 'after',
                variableName: 'cursor',
            },
            {
                kind: 'Variable',
                name: 'first',
                variableName: 'count',
            },
            {
                kind: 'Literal',
                name: 'refPrefix',
                value: 'refs/heads/',
            },
        ],
        v5 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        },
        v6 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'oid',
            storageKey: null,
        },
        v7 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'avatarUrl',
            storageKey: null,
        },
        v8 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'login',
            storageKey: null,
        },
        v9 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'state',
            storageKey: null,
        };
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'RepoWithBranchPaginationQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        {
                            args: [
                                {
                                    kind: 'Variable',
                                    name: 'count',
                                    variableName: 'count',
                                },
                                {
                                    kind: 'Variable',
                                    name: 'cursor',
                                    variableName: 'cursor',
                                },
                            ],
                            kind: 'FragmentSpread',
                            name: 'RepoWithBranchListFragment_repo',
                        },
                    ],
                    storageKey: null,
                },
            ],
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Operation',
            name: 'RepoWithBranchPaginationQuery',
            selections: [
                {
                    alias: null,
                    args: v1 /*: any*/,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'node',
                    plural: false,
                    selections: [
                        v2 /*: any*/,
                        v3 /*: any*/,
                        {
                            kind: 'InlineFragment',
                            selections: [
                                {
                                    alias: 'branches',
                                    args: v4 /*: any*/,
                                    concreteType: 'RefConnection',
                                    kind: 'LinkedField',
                                    name: 'refs',
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
                                                        v5 /*: any*/,
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: 'LinkedField',
                                                            name: 'target',
                                                            plural: false,
                                                            selections: [
                                                                v2 /*: any*/,
                                                                {
                                                                    kind: 'InlineFragment',
                                                                    selections: [
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'authoredDate',
                                                                            storageKey: null,
                                                                        },
                                                                        v6 /*: any*/,
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'Status',
                                                                            kind: 'LinkedField',
                                                                            name: 'status',
                                                                            plural: false,
                                                                            selections: [
                                                                                v3 /*: any*/,
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: 'Commit',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'commit',
                                                                                    plural: false,
                                                                                    selections: [
                                                                                        v6 /*: any*/,
                                                                                        v3 /*: any*/,
                                                                                    ],
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
                                                                                        v7 /*: any*/,
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: 'context',
                                                                                            storageKey: null,
                                                                                        },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: null,
                                                                                            kind: 'LinkedField',
                                                                                            name: 'creator',
                                                                                            plural: false,
                                                                                            selections: [
                                                                                                v2 /*: any*/,
                                                                                                v8 /*: any*/,
                                                                                                {
                                                                                                    kind: 'InlineFragment',
                                                                                                    selections: [
                                                                                                        v3 /*: any*/,
                                                                                                    ],
                                                                                                    type: 'Node',
                                                                                                    abstractKey:
                                                                                                        '__isNode',
                                                                                                },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                        v9 /*: any*/,
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: 'description',
                                                                                            storageKey: null,
                                                                                        },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: 'targetUrl',
                                                                                            storageKey: null,
                                                                                        },
                                                                                        v3 /*: any*/,
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                v9 /*: any*/,
                                                                            ],
                                                                            storageKey: null,
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
                                                                            name: 'abbreviatedOid',
                                                                            storageKey: null,
                                                                        },
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
                                                                            concreteType: 'GitActor',
                                                                            kind: 'LinkedField',
                                                                            name: 'author',
                                                                            plural: false,
                                                                            selections: [
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: 'User',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'user',
                                                                                    plural: false,
                                                                                    selections: [
                                                                                        v8 /*: any*/,
                                                                                        v5 /*: any*/,
                                                                                        v7 /*: any*/,
                                                                                        v3 /*: any*/,
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
                                                                v3 /*: any*/,
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
                                                                                v3 /*: any*/,
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
                                                            storageKey:
                                                                'associatedPullRequests(first:1,states:["OPEN"])',
                                                        },
                                                        v3 /*: any*/,
                                                        v2 /*: any*/,
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
                                    storageKey: null,
                                },
                                {
                                    alias: 'branches',
                                    args: v4 /*: any*/,
                                    filters: ['refPrefix'],
                                    handle: 'connection',
                                    key: 'RepoWithBranchList_repositories_branches',
                                    kind: 'LinkedHandle',
                                    name: 'refs',
                                },
                            ],
                            type: 'Repository',
                            abstractKey: null,
                        },
                    ],
                    storageKey: null,
                },
            ],
        },
        params: {
            cacheID: '1181ee7d4da1fb75eb3ec81db7b51381',
            id: null,
            metadata: {},
            name: 'RepoWithBranchPaginationQuery',
            operationKind: 'query',
            text: 'query RepoWithBranchPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RepoWithBranchListFragment_repo_1G22uz\n    id\n  }\n}\n\nfragment BranchInfoRowFragment_ref on Ref {\n  name\n  target {\n    __typename\n    ...CommitWithStatuses_commit\n    id\n  }\n  associatedPullRequests(first: 1, states: [OPEN]) {\n    edges {\n      node {\n        id\n        ...PullRequestMergeFragment_ref\n      }\n    }\n  }\n}\n\nfragment CommitWithStatuses_commit on Commit {\n  authoredDate\n  oid\n  status {\n    id\n    commit {\n      oid\n      id\n    }\n    contexts {\n      avatarUrl\n      context\n      creator {\n        __typename\n        login\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      state\n      description\n      targetUrl\n      id\n    }\n    state\n  }\n  commitUrl\n  abbreviatedOid\n  message\n  author {\n    user {\n      login\n      name\n      avatarUrl\n      id\n    }\n  }\n}\n\nfragment PullRequestMergeFragment_ref on PullRequest {\n  headRefOid\n  number\n  url\n  title\n  mergeStateStatus\n  closed\n  isDraft\n  isInMergeQueue\n  mergeable\n  merged\n  locked\n}\n\nfragment RepoWithBranchListFragment_repo_1G22uz on Repository {\n  branches: refs(refPrefix: "refs/heads/", first: $count, after: $cursor) {\n    edges {\n      node {\n        ...BranchInfoRowFragment_ref\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
        },
    };
})();

(node as any).hash = '952626d02325330fe463526370bd6d4d';

export default node;
