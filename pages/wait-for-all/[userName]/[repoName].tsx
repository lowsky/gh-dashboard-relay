import React, { Suspense } from 'react';

import InternalLink from '../../../components/InternalLink';

import RichErrorBoundary from '../../../components/RichErrorBoundary';

import { UserRepoFetchAll } from '../../../container/LazyUserRepo';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import { UserRepoFromUrlProvider } from '../../../components/useUserRepoFromRoute';

export default function LoadAllThenPage() {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href={`/wait-for-all/`}>back to shortcut list</InternalLink>
            <WaitForAll />
        </UserRepoFromUrlProvider>
    );
}

export function WaitForAll() {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoFetchAll />
            </Suspense>
        </RichErrorBoundary>
    );
}
