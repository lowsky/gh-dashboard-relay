'use client';
import React, { Suspense } from 'react';

import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import InternalLink from 'components/InternalLink';

import { UserRepoWaterfall } from 'container/LazyUserRepo';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';

export const revalidate = 10;

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
