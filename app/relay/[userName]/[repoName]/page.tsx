'use client';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay/hooks';

import UserRepo from '../../../../relay/UserRepo';
import RichErrorBoundary from '../../../../components/RichErrorBoundary';
import { ContentLoadingFallback } from '../../../../components/ContentLoadingFallback';
import { repoQuery, userQuery } from '../../../../queries/relayPage';
import { useEnvironment } from '../../../../lib/relay';
import { relayPageUserQuery } from '../../../../queries/__generated__/relayPageUserQuery.graphql';
import { relayPageRepoQuery } from '../../../../queries/__generated__/relayPageRepoQuery.graphql';
import { UserRepoFromUrlProvider, useUserRepo } from '../../../../components/useUserRepoFromRoute';
import InternalLink from '../../../../components/InternalLink';

const RelayRoot = () => {
    const environment = useEnvironment({});

    return (
        <UserRepoFromUrlProvider>
            <p>
                <InternalLink href={`/relay`}>back to shortcut list</InternalLink>
            </p>

            <RelayEnvironmentProvider environment={environment}>
                <RichErrorBoundary>
                    <Suspense fallback={<ContentLoadingFallback />}>
                        <RelayRootMain />
                    </Suspense>
                </RichErrorBoundary>
            </RelayEnvironmentProvider>
        </UserRepoFromUrlProvider>
    );
};

const RelayRootMain = () => {
    const { userName, repoName } = useUserRepo();
    const variables = {
        userName,
        repoName,
    };
    const userData = useLazyLoadQuery<relayPageUserQuery>(userQuery, variables);
    const repoData = useLazyLoadQuery<relayPageRepoQuery>(repoQuery, variables);

    return <UserRepo user={userData.user} repo={repoData.repo} />;
};

export default RelayRoot;
