'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { RelayRootQuery } from './__generated__/RelayRootQuery.graphql';
import RelayClientContext from '../../../lib/RelayClientContext';

import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import InternalLink from 'components/InternalLink';
import RichErrorBoundary from 'components/RichErrorBoundary';

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
            <Suspense fallback={<ContentLoadingFallback />}>
                <RichErrorBoundary>
                    <UserPageContent userName={userName} />
                </RichErrorBoundary>
            </Suspense>
        </RelayClientContext>
    );
}

export function UserPageContent({ userName }) {
    const data = useLazyLoadQuery<RelayRootQuery>(userQuery, { userName });

    const { repositoryOwner, rateLimit } = data;
    console.log({ rateLimit });

    if (!repositoryOwner)
        return (
            <p>
                User <strong>{userName}</strong> was not found!{' '}
            </p>
        );

    if (repositoryOwner) {
        return (
            <>
                <InternalLink href="/relay">Back to overview</InternalLink>
                <UserWithReposFragment user={repositoryOwner} />
            </>
        );
    }
}
