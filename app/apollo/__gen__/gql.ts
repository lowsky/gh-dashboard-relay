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
    '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n': typeof types.GetRepositoriesDocument;
    '\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n': typeof types.UserFragment_RepositoryOwnerFragmentDoc;
    '\n    query GetUser($login: String!) {\n        user(login: $login) {\n            login\n            company\n            avatarUrl\n        }\n    }\n': typeof types.GetUserDocument;
    '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n': typeof types.GetUserWithReposDocument;
    '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        ...UserFragment_repositoryOwner\n        login # used later for paginated fetching of repos\n    }\n    \n': typeof types.UserWithReposFragment_RepositoryOwnerFragmentDoc;
};
const documents: Documents = {
    '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n':
        types.GetRepositoriesDocument,
    '\n    fragment UserFragment_repositoryOwner on RepositoryOwner {\n        ... on User {\n            id\n            login\n            company\n            avatarUrl\n        }\n        ... on Organization {\n            id\n            login\n            avatarUrl\n        }\n    }\n':
        types.UserFragment_RepositoryOwnerFragmentDoc,
    '\n    query GetUser($login: String!) {\n        user(login: $login) {\n            login\n            company\n            avatarUrl\n        }\n    }\n':
        types.GetUserDocument,
    '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n':
        types.GetUserWithReposDocument,
    '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        ...UserFragment_repositoryOwner\n        login # used later for paginated fetching of repos\n    }\n    \n':
        types.UserWithReposFragment_RepositoryOwnerFragmentDoc,
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
    source: '\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query GetRepositories($login: String!, $after: String, $first: Int!) {\n        repositoryOwner(login: $login) {\n            repositories(\n                first: $first\n                after: $after\n                orderBy: { field: NAME, direction: ASC }\n                ownerAffiliations: [OWNER]\n            ) {\n                totalCount\n                pageInfo {\n                    hasNextPage\n                    endCursor\n                }\n                edges {\n                    node {\n                        id\n                        name\n                        nameWithOwner\n                        isFork\n                        url\n                        description\n                        pullRequests(first: 1, states: [OPEN]) {\n                            totalCount\n                        }\n                    }\n                }\n            }\n        }\n    }\n'];
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
    source: '\n    query GetUser($login: String!) {\n        user(login: $login) {\n            login\n            company\n            avatarUrl\n        }\n    }\n'
): (typeof documents)['\n    query GetUser($login: String!) {\n        user(login: $login) {\n            login\n            company\n            avatarUrl\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n'
): (typeof documents)['\n    query GetUserWithRepos($userName: String!) {\n        repositoryOwner(login: $userName) {\n            ... on User {\n                ...UserWithReposFragment_repositoryOwner\n            }\n            ... on Organization {\n                ...UserWithReposFragment_repositoryOwner\n            }\n        }\n        rateLimit {\n            limit\n            remaining\n            used\n            resetAt\n        }\n    }\n    \n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
    source: '\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        ...UserFragment_repositoryOwner\n        login # used later for paginated fetching of repos\n    }\n    \n'
): (typeof documents)['\n    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {\n        ...UserFragment_repositoryOwner\n        login # used later for paginated fetching of repos\n    }\n    \n'];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
