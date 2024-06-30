'use client';

import React, { Suspense } from 'react';

import InternalLink from 'components/InternalLink';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import { UserRepoFetchAll } from 'container/LazyUserRepo';

export default function LoadAllThenPage() {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href="/wait-for-all">back to shortcut list</InternalLink>
            <RichErrorBoundary>
                <Suspense fallback={<ContentLoadingFallback />}>
                    <UserRepoFetchAll />
                </Suspense>
            </RichErrorBoundary>
        </UserRepoFromUrlProvider>
    );
}
