'use client';

import { Suspense } from 'react';
import { gql, useQuery } from '@apollo/client';

import RepoList from 'apollo/RepoList';
import User from 'components/User';
import { Spinner } from 'components/Spinner';

const USER_WITH_REPOS_QUERY = gql`
    query GetUserWithRepos($userName: String!) {
        repositoryOwner(login: $userName) {
            ... on User {
                login
                company
                avatarUrl
            }
        }
        rateLimit {
            limit
            remaining
            used
            resetAt
        }
    }
`;

interface UserWithReposQueryProps {
    userName: string;
}

export default function UserWithReposQuery({ userName }: UserWithReposQueryProps) {
    const { loading, error, data } = useQuery(USER_WITH_REPOS_QUERY, {
        variables: { userName },
    });

    if (loading) return <div>Loading user data...</div>;
    if (error) return <div>Error loading user data: {error.message}</div>;

    const { repositoryOwner, rateLimit } = data || {};

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
            <Suspense fallback={<Spinner />}>
                <User user={repositoryOwner} />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <RepoList login={userName} />
            </Suspense>
        </>
    );
}
