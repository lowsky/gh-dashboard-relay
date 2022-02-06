/**
 * @generated SignedSource<<7a62a742102f7805d42ceb9dabed9de7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type relayPageRepoQuery$variables = {
    userName: string;
    repoName: string;
};
export type relayPageRepoQueryVariables = relayPageRepoQuery$variables;
export type relayPageRepoQuery$data = {
    readonly repo: {
        readonly ' $fragmentSpreads': FragmentRefs<'UserRepo_repo'>;
    } | null;
};
export type relayPageRepoQueryResponse = relayPageRepoQuery$data;
export type relayPageRepoQuery = {
    variables: relayPageRepoQueryVariables;
    response: relayPageRepoQuery$data;
};

const node: ConcreteRequest = (function () {
    var v0 = {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'repoName',
        },
        v1 = {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'userName',
        },
        v2 = [
            {
                kind: 'Variable',
                name: 'name',
                variableName: 'repoName',
            },
            {
                kind: 'Variable',
                name: 'ownerUsername',
                variableName: 'userName',
            },
        ],
        v3 = {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'name',
            storageKey: null,
        };
    return {
        fragment: {
            argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
            kind: 'Fragment',
            metadata: null,
            name: 'relayPageRepoQuery',
            selections: [
                {
                    alias: null,
                    args: v2 /*: any*/,
                    concreteType: 'GithubRepo',
                    kind: 'LinkedField',
                    name: 'repo',
                    plural: false,
                    selections: [
                        {
                            args: null,
                            kind: 'FragmentSpread',
                            name: 'UserRepo_repo',
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
            argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
            kind: 'Operation',
            name: 'relayPageRepoQuery',
            selections: [
                {
                    alias: null,
                    args: v2 /*: any*/,
                    concreteType: 'GithubRepo',
                    kind: 'LinkedField',
                    name: 'repo',
                    plural: false,
                    selections: [
                        v3 /*: any*/,
                        {
                            alias: null,
                            args: null,
                            concreteType: 'GithubUser',
                            kind: 'LinkedField',
                            name: 'owner',
                            plural: false,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'login',
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            concreteType: 'GithubBranch',
                            kind: 'LinkedField',
                            name: 'branches',
                            plural: true,
                            selections: [
                                v3 /*: any*/,
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: 'GithubCommit',
                                    kind: 'LinkedField',
                                    name: 'lastCommit',
                                    plural: false,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'sha',
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
                                            kind: 'ScalarField',
                                            name: 'date',
                                            storageKey: null,
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: 'GithubStatus',
                                            kind: 'LinkedField',
                                            name: 'status',
                                            plural: true,
                                            selections: [
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
                                                    kind: 'ScalarField',
                                                    name: 'description',
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'state',
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'target_url',
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'updated_at',
                                                    storageKey: null,
                                                },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'avatar_url',
                                                    storageKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: 'PullRequest',
                                            kind: 'LinkedField',
                                            name: 'associatedPullRequests',
                                            plural: true,
                                            selections: [
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
                                            ],
                                            storageKey: null,
                                        },
                                    ],
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
            cacheID: '8c411b7bc8a039fd5bbdf2481a8761b6',
            id: null,
            metadata: {},
            name: 'relayPageRepoQuery',
            operationKind: 'query',
            text: 'query relayPageRepoQuery(\n  $userName: String!\n  $repoName: String!\n) {\n  repo(ownerUsername: $userName, name: $repoName) {\n    ...UserRepo_repo\n  }\n}\n\nfragment BranchInfoRow_branch on GithubBranch {\n  name\n  lastCommit {\n    ...CommitWithStatuses_commit\n    associatedPullRequests {\n      ...PullRequestInfo_pullRequest\n    }\n  }\n}\n\nfragment BranchesTable_repo on GithubRepo {\n  branches {\n    ...BranchInfoRow_branch\n  }\n}\n\nfragment CommitWithStatuses_commit on GithubCommit {\n  sha\n  message\n  date\n  status {\n    context\n    description\n    state\n    target_url\n    updated_at\n    avatar_url\n  }\n}\n\nfragment PullRequestInfo_pullRequest on PullRequest {\n  title\n  number\n  url\n}\n\nfragment Repo_repo on GithubRepo {\n  name\n  owner {\n    login\n  }\n}\n\nfragment UserRepo_repo on GithubRepo {\n  ...Repo_repo\n  ...BranchesTable_repo\n}\n',
        },
    };
})();

(node as any).hash = '3db12a6ede26a85587d9f5a14be7e272';

export default node;
