'use client';

import React, { Suspense } from 'react';

import InternalLink from 'components/InternalLink';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import { UserRepoFetchAll } from 'container/LazyUserRepo';

export const revalidate = 10;

export default function LoadAllThenPage() {
    return (
        <UserRepoFromUrlProvider>
            <p>
                <InternalLink href={`/wait-for-all/`}>back to shortcut list</InternalLink>
            </p>
            <RichErrorBoundary>
                <Suspense fallback={<ContentLoadingFallback />}>
                    <UserRepoFetchAll />
                </Suspense>
            </RichErrorBoundary>
        </UserRepoFromUrlProvider>
    );
}
