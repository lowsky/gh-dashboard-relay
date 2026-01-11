'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { RelayRootQuery } from './__generated__/RelayRootQuery.graphql';
import RelayClientContext from 'lib/RelayClientContext';

import InternalLink from 'components/InternalLink';

import UserWithReposFragment from './UserWithReposFragment';

export const USER_WITH_REPOS_QUERY = graphql`
    query RelayRootQuery($userName: String!) {
        repositoryOwner(login: $userName) {
            ...UserWithReposFragment_user
        }
        rateLimit {
            # eslint-disable-next-line relay/unused-fields
            limit
            # eslint-disable-next-line relay/unused-fields
            remaining
            # eslint-disable-next-line relay/unused-fields
            used
            # eslint-disable-next-line relay/unused-fields
            resetAt
        }
    }
`;

export default function RelayRoot(props: { authToken: string }) {
    const { userName } = useParams<{ userName: string }>() ?? {};
    return (
        <RelayClientContext auth={props.authToken}>
            <Suspense fallback={<div>Loading...</div>}>
                <UserPageContent userName={userName!} />
            </Suspense>
        </RelayClientContext>
    );
}

export function UserPageContent({ userName }: { userName: string }) {
    const data = useLazyLoadQuery<RelayRootQuery>(
        USER_WITH_REPOS_QUERY,
        { userName },
        {
            networkCacheConfig: {
                force: true,
            },
        }
    );

    const { repositoryOwner, rateLimit } = data;

    console.log('rate limit info:', rateLimit);

    if (!repositoryOwner) {
        return (
            <p>
                User <strong>{userName}</strong> was not found!
            </p>
        );
    }

    return (
        <>
            <InternalLink href="/relay">Back to overview</InternalLink>
            <UserWithReposFragment user={repositoryOwner} />
        </>
    );
}
