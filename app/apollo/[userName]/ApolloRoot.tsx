'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';

import ApolloClientContext from 'lib/ApolloClientContext';
import InternalLink from 'components/InternalLink';
import UserWithReposQuery from './UserWithReposQuery';

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

function UserPageContent({ userName }: { userName: string }) {
    return (
        <>
            <InternalLink href="/apollo">Back to overview</InternalLink>
            <UserWithReposQuery userName={userName} />
        </>
    );
}
