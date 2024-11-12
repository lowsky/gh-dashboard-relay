'use client';
import React, { Suspense } from 'react';

// using context only works on the client: react-relay/lib/relay-hooks/_ProfilerContext_
import { RelayEnvironmentProvider } from 'react-relay';
import { IEnvironment } from 'relay-runtime';

import { RelayRootMain } from './relayRootMain';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import { useEnvironment } from 'lib/relay';

import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import InternalLink from 'components/InternalLink';

const RelayRoot = () => {
    const environment: IEnvironment = useEnvironment({});

    return (
        <UserRepoFromUrlProvider>
            <InternalLink href="/relay">back to shortcut list</InternalLink>
            {
                <RelayEnvironmentProvider environment={environment}>
                    <RichErrorBoundary>
                        <Suspense fallback={<ContentLoadingFallback />}>
                            <RelayRootMain />
                        </Suspense>
                    </RichErrorBoundary>
                </RelayEnvironmentProvider>
            }
        </UserRepoFromUrlProvider>
    );
};

export default RelayRoot;
