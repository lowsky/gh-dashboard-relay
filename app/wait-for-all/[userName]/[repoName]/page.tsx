'use client';

import React, { Suspense } from 'react';

import InternalLink from '../../../../components/InternalLink';

import RichErrorBoundary from '../../../../components/RichErrorBoundary';

import { UserRepoFetchAll } from '../../../../container/LazyUserRepo';
import { ContentLoadingFallback } from '../../../../components/ContentLoadingFallback';
import { UserRepoFromUrlProvider } from '../../../../components/useUserRepoFromRoute';

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
