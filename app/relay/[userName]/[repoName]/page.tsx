import React, { Suspense } from 'react';

import RelayClientContext from 'app/relay/[userName]/[repoName]/RelayClientContext';
import { RelayRootMain } from './relayRootMain';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { ContentLoadingFallback } from 'components/ContentLoadingFallback';

import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import InternalLink from 'components/InternalLink';

const RelayRoot = () => {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href="/relay">back to shortcut list</InternalLink>
            <RelayClientContext>
                <RichErrorBoundary>
                    <Suspense fallback={<ContentLoadingFallback />}>
                        <RelayRootMain />
                    </Suspense>
                </RichErrorBoundary>
            </RelayClientContext>
        </UserRepoFromUrlProvider>
    );
};

export default RelayRoot;
