'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import type { TypedDocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';

import { useSuspenseQuery } from '@apollo/client/react';

import { UserWithReposFragment_repositoryOwner } from './UserWithReposFragment';

import type { GetUserWithReposQuery, GetUserWithReposQueryVariables } from '../__gen__/graphql';

import ApolloClientContext from 'lib/ApolloClientContext';
import InternalLink from 'components/InternalLink';
import UserWithReposFragment from './UserWithReposFragment';

import { Spinner } from 'components/Spinner';

export const USER_WITH_REPOS_QUERY: TypedDocumentNode<GetUserWithReposQuery, GetUserWithReposQuery> = gql`
    query GetUserWithRepos($userName: String!) {
        repositoryOwner(login: $userName) {
            id # key value for resolving the fragment in child component
            login
            ... on User {
                ...UserWithReposFragment_repositoryOwner
            }
            ... on Organization {
                ...UserWithReposFragment_repositoryOwner
            }
        }
        rateLimit {
            limit
            remaining
            used
            resetAt
        }
    }
    ${UserWithReposFragment_repositoryOwner}
`;

export default function ApolloRoot(props: { authToken: string }) {
    const { userName } = useParams<{ userName: string }>() ?? {};

    return (
        <ApolloClientContext auth={props.authToken}>
            <Suspense fallback={<div>Loading...</div>}>
                <UserPageContent userName={userName!} />
            </Suspense>
        </ApolloClientContext>
    );
}

export function UserPageContent({ userName }: { userName: string }) {
    const { error, data } = useSuspenseQuery<GetUserWithReposQuery, GetUserWithReposQueryVariables>(
        USER_WITH_REPOS_QUERY,
        {
            variables: { userName },
        }
    );

    if (error) return <div>Error loading user data: {error.message}</div>;
    if (!data) return <div>,no data...</div>;

    const { repositoryOwner, rateLimit } = data;

    console.log('rate limit info:', rateLimit);

    if (!repositoryOwner) {
        return (
            <p>
                User <strong>{userName}</strong> was not found!{' '}
            </p>
        );
    }

    return (
        <>
            <InternalLink href="/apollo">Back to overview</InternalLink>
            <Suspense fallback={<Spinner />}>
                <UserWithReposFragment repositoryOwner={repositoryOwner} />
            </Suspense>
        </>
    );
}
