'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { RelayRootQuery, RelayRootQuery$data, RelayRootQuery$variables } from './__generated__/RelayRootQuery.graphql';
import RelayClientContext from 'lib/RelayClientContext';

import InternalLink from 'components/InternalLink';

import UserWithReposFragment from './UserWithReposFragment';

const userQuery = graphql`
    query RelayRootQuery($userName: String!) {
        repositoryOwner(login: $userName) {
            ...UserWithReposFragment_user
        }
        rateLimit {
            limit
            remaining
            used
            resetAt
        }
    }
`;

export default function RelayRoot(props: { authToken: string }) {
    const { userName } = useParams<{ userName: string }>() ?? {};
    return (
        <RelayClientContext auth={props.authToken}>
            <Suspense>
                <UserPageContent userName={userName!} />
            </Suspense>
        </RelayClientContext>
    );
}

export function UserPageContent({ userName }: { userName: RelayRootQuery$variables['userName'] }) {
    const data: RelayRootQuery$data = useLazyLoadQuery<RelayRootQuery>(
        userQuery,
        { userName },
        {
            networkCacheConfig: {
                force: true,
            },
        }
    );

    const { repositoryOwner, rateLimit } = data;

    console.log('rate limit info:', rateLimit);

    if (!repositoryOwner)
        return (
            <p>
                User <strong>{userName}</strong> was not found!{' '}
            </p>
        );

    return (
        <>
            <InternalLink href="/relay">Back to overview</InternalLink>
            <UserWithReposFragment user={repositoryOwner} />
        </>
    );
}
