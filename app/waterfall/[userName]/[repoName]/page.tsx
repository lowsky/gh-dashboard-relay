'use client';
import React, { Suspense } from 'react';

import { ContentLoadingFallback } from '../../../../components/ContentLoadingFallback';
import RichErrorBoundary from '../../../../components/RichErrorBoundary';
import InternalLink from '../../../../components/InternalLink';

import { UserRepoWaterfall } from '../../../../container/LazyUserRepo';
import { UserRepoFromUrlProvider } from '../../../../components/useUserRepoFromRoute';

export default function WaterfallPage() {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href={'/waterfall'}>back to shortcut list</InternalLink>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoWaterfall />
            </Suspense>
        </UserRepoFromUrlProvider>
    );
}

function WaterfallMain() {
    return (
        <RichErrorBoundary>
            <Suspense fallback={<ContentLoadingFallback />}>
                <UserRepoWaterfall />
            </Suspense>
        </RichErrorBoundary>
    );
}
