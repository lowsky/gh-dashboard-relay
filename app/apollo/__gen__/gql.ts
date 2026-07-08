/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    '\n    fragment CommitWithStatuses_commit on Commit {\n        id\n        authoredDate\n        status {\n            id\n            commit {\n                oid\n            }\n            contexts {\n                avatarUrl\n                context\n                #creator { login }\n                state\n                description\n                targetUrl\n            }\n            state\n        }\n        commitUrl\n        message\n        # would break overall loading the whole page. shrug\n        # author { user { login name avatarUrl } }\n    }\n': typeof types.CommitWithStatuses_CommitFragmentDoc;
    '\n    fragment BranchInfoRowFragment_ref on Ref {\n        name\n        id\n        target {\n            ... on Commit {\n                id\n                ...CommitWithStatuses_commit\n            }\n        }\n        associatedPullRequests(first: 1, states: [OPEN]) {\n            edges {\n                node {\n                    id\n                    ...PullRequestMergeFragment_ref\n                }\n            }\n        }\n    }\n    \n    \n': typeof types.BranchInfoRowFragment_RefFragmentDoc;
    '\n    fragment PullRequestMergeFragment_ref on PullRequest {\n        id\n        headRefOid\n        number\n        url\n        title\n        mergeStateStatus\n        closed\n        isDraft\n        merged\n        mergeable\n    }\n': typeof types.PullRequestMergeFragment_RefFragmentDoc;
    '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            login\n            id\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n': typeof types.GetRepositoriesDocument;
    '\n    query UserFragmentStoryQuery {\n        repositoryOwner(login: "test-id") {\n            ... on RepositoryOwner {\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    }\n': typeof types.UserFragmentStoryQueryDocument;
    '\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n': typeof types.UserFragment_RepositoryOwnerFragmentDoc;
    '\n    mutation useMergePRMutation($input: MergePullRequestInput!) {\n        mergePullRequest(input: $input) {\n            pullRequest {\n                merged\n                state\n                mergeStateStatus\n            }\n        }\n    }\n': typeof types.UseMergePrMutationDocument;
    '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            id # key value for resolving the fragment in child component\n            login\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n': typeof types.GetUserWithReposDocument;
    '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        id # for caching\n        ...UserFragment_repositoryOwner\n        ... on User {\n            id\n        }\n        ... on Organization {\n            id\n        }\n        login # used later for paginated fetching of repos\n    }\n    \n': typeof types.UserWithReposFragment_RepositoryOwnerFragmentDoc;
    '\n        query GetUserRepoBranches($userName: String!) {\n            repositoryOwner(login: $userName) {\n                id # key value for resolving the fragment in child component\n                login\n                avatarUrl\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    ': typeof types.GetUserRepoBranchesDocument;
    '\n    query GetRepoBranches($userName: String!, $repoName: String!, $after: String, $count: Int!) {\n        repository(name: $repoName, owner: $userName) {\n            id\n            branches: refs(refPrefix: "refs/heads/", first: $count, after: $after) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        ...BranchInfoRowFragment_ref\n                    }\n                }\n            }\n        }\n    }\n    \n': typeof types.GetRepoBranchesDocument;
};
const documents: Documents = {
    '\n    fragment CommitWithStatuses_commit on Commit {\n        id\n        authoredDate\n        status {\n            id\n            commit {\n                oid\n            }\n            contexts {\n                avatarUrl\n                context\n                #creator { login }\n                state\n                description\n                targetUrl\n            }\n            state\n        }\n        commitUrl\n        message\n        # would break overall loading the whole page. shrug\n        # author { user { login name avatarUrl } }\n    }\n':
        types.CommitWithStatuses_CommitFragmentDoc,
    '\n    fragment BranchInfoRowFragment_ref on Ref {\n        name\n        id\n        target {\n            ... on Commit {\n                id\n                ...CommitWithStatuses_commit\n            }\n        }\n        associatedPullRequests(first: 1, states: [OPEN]) {\n            edges {\n                node {\n                    id\n                    ...PullRequestMergeFragment_ref\n                }\n            }\n        }\n    }\n    \n    \n':
        types.BranchInfoRowFragment_RefFragmentDoc,
    '\n    fragment PullRequestMergeFragment_ref on PullRequest {\n        id\n        headRefOid\n        number\n        url\n        title\n        mergeStateStatus\n        closed\n        isDraft\n        merged\n        mergeable\n    }\n':
        types.PullRequestMergeFragment_RefFragmentDoc,
    '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            login\n            id\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n':
        types.GetRepositoriesDocument,
    '\n    query UserFragmentStoryQuery {\n        repositoryOwner(login: "test-id") {\n            ... on RepositoryOwner {\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    }\n':
        types.UserFragmentStoryQueryDocument,
    '\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n':
        types.UserFragment_RepositoryOwnerFragmentDoc,
    '\n    mutation useMergePRMutation($input: MergePullRequestInput!) {\n        mergePullRequest(input: $input) {\n            pullRequest {\n                merged\n                state\n                mergeStateStatus\n            }\n        }\n    }\n':
        types.UseMergePrMutationDocument,
    '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            id # key value for resolving the fragment in child component\n            login\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n':
        types.GetUserWithReposDocument,
    '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        id # for caching\n        ...UserFragment_repositoryOwner\n        ... on User {\n            id\n        }\n        ... on Organization {\n            id\n        }\n        login # used later for paginated fetching of repos\n    }\n    \n':
        types.UserWithReposFragment_RepositoryOwnerFragmentDoc,
    '\n        query GetUserRepoBranches($userName: String!) {\n            repositoryOwner(login: $userName) {\n                id # key value for resolving the fragment in child component\n                login\n                avatarUrl\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    ':
        types.GetUserRepoBranchesDocument,
    '\n    query GetRepoBranches($userName: String!, $repoName: String!, $after: String, $count: Int!) {\n        repository(name: $repoName, owner: $userName) {\n            id\n            branches: refs(refPrefix: "refs/heads/", first: $count, after: $after) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        ...BranchInfoRowFragment_ref\n                    }\n                }\n            }\n        }\n    }\n    \n':
        types.GetRepoBranchesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment CommitWithStatuses_commit on Commit {\n        id\n        authoredDate\n        status {\n            id\n            commit {\n                oid\n            }\n            contexts {\n                avatarUrl\n                context\n                #creator { login }\n                state\n                description\n                targetUrl\n            }\n            state\n        }\n        commitUrl\n        message\n        # would break overall loading the whole page. shrug\n        # author { user { login name avatarUrl } }\n    }\n'
): (typeof documents)['\n    fragment CommitWithStatuses_commit on Commit {\n        id\n        authoredDate\n        status {\n            id\n            commit {\n                oid\n            }\n            contexts {\n                avatarUrl\n                context\n                #creator { login }\n                state\n                description\n                targetUrl\n            }\n            state\n        }\n        commitUrl\n        message\n        # would break overall loading the whole page. shrug\n        # author { user { login name avatarUrl } }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment BranchInfoRowFragment_ref on Ref {\n        name\n        id\n        target {\n            ... on Commit {\n                id\n                ...CommitWithStatuses_commit\n            }\n        }\n        associatedPullRequests(first: 1, states: [OPEN]) {\n            edges {\n                node {\n                    id\n                    ...PullRequestMergeFragment_ref\n                }\n            }\n        }\n    }\n    \n    \n'
): (typeof documents)['\n    fragment BranchInfoRowFragment_ref on Ref {\n        name\n        id\n        target {\n            ... on Commit {\n                id\n                ...CommitWithStatuses_commit\n            }\n        }\n        associatedPullRequests(first: 1, states: [OPEN]) {\n            edges {\n                node {\n                    id\n                    ...PullRequestMergeFragment_ref\n                }\n            }\n        }\n    }\n    \n    \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment PullRequestMergeFragment_ref on PullRequest {\n        id\n        headRefOid\n        number\n        url\n        title\n        mergeStateStatus\n        closed\n        isDraft\n        merged\n        mergeable\n    }\n'
): (typeof documents)['\n    fragment PullRequestMergeFragment_ref on PullRequest {\n        id\n        headRefOid\n        number\n        url\n        title\n        mergeStateStatus\n        closed\n        isDraft\n        merged\n        mergeable\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            login\n            id\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            login\n            id\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query UserFragmentStoryQuery {\n        repositoryOwner(login: "test-id") {\n            ... on RepositoryOwner {\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    }\n'
): (typeof documents)['\n    query UserFragmentStoryQuery {\n        repositoryOwner(login: "test-id") {\n            ... on RepositoryOwner {\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n'
): (typeof documents)['\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    mutation useMergePRMutation($input: MergePullRequestInput!) {\n        mergePullRequest(input: $input) {\n            pullRequest {\n                merged\n                state\n                mergeStateStatus\n            }\n        }\n    }\n'
): (typeof documents)['\n    mutation useMergePRMutation($input: MergePullRequestInput!) {\n        mergePullRequest(input: $input) {\n            pullRequest {\n                merged\n                state\n                mergeStateStatus\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            id # key value for resolving the fragment in child component\n            login\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n'
): (typeof documents)['\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            id # key value for resolving the fragment in child component\n            login\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        id # for caching\n        ...UserFragment_repositoryOwner\n        ... on User {\n            id\n        }\n        ... on Organization {\n            id\n        }\n        login # used later for paginated fetching of repos\n    }\n    \n'
): (typeof documents)['\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        id # for caching\n        ...UserFragment_repositoryOwner\n        ... on User {\n            id\n        }\n        ... on Organization {\n            id\n        }\n        login # used later for paginated fetching of repos\n    }\n    \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n        query GetUserRepoBranches($userName: String!) {\n            repositoryOwner(login: $userName) {\n                id # key value for resolving the fragment in child component\n                login\n                avatarUrl\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    '
): (typeof documents)['\n        query GetUserRepoBranches($userName: String!) {\n            repositoryOwner(login: $userName) {\n                id # key value for resolving the fragment in child component\n                login\n                avatarUrl\n                ...UserFragment_repositoryOwner\n            }\n        }\n        \n    '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetRepoBranches($userName: String!, $repoName: String!, $after: String, $count: Int!) {\n        repository(name: $repoName, owner: $userName) {\n            id\n            branches: refs(refPrefix: "refs/heads/", first: $count, after: $after) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        ...BranchInfoRowFragment_ref\n                    }\n                }\n            }\n        }\n    }\n    \n'
): (typeof documents)['\n    query GetRepoBranches($userName: String!, $repoName: String!, $after: String, $count: Int!) {\n        repository(name: $repoName, owner: $userName) {\n            id\n            branches: refs(refPrefix: "refs/heads/", first: $count, after: $after) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        ...BranchInfoRowFragment_ref\n                    }\n                }\n            }\n        }\n    }\n    \n'];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
