import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay/hooks';

import UILibContext from '../../../components/UILibContext';
import { UILibWithRelaySupport } from '../../../components';
import UserRepo from '../../../relay/UserRepo';
import RichErrorBoundary from '../../../components/RichErrorBoundary';
import { ContentLoadingFallback } from '../../../components/ContentLoadingFallback';
import { repoQuery, userQuery } from '../../../queries/relayPage';
import { mergePullRequest, DoMergePR } from '../../../restinpeace/github';
import { useEnvironment } from '../../../lib/relay';
import { relayPageUserQuery } from '../../../queries/__generated__/relayPageUserQuery.graphql';
import { relayPageRepoQuery } from '../../../queries/__generated__/relayPageRepoQuery.graphql';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';

import { singleArgOrDefault } from '../../../components/singleArgOrDefault';

const RelayRoot = () => {
    const environment = useEnvironment({});
    const router = useRouter();
    const { userName, repoName } = router.query;

    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return (
            <RelayEnvironmentProvider environment={environment}>
                <RichErrorBoundary>
                    <Suspense fallback={<ContentLoadingFallback />}>
                        <RelayRootMain userName={userName} repoName={repoName} />
                    </Suspense>
                </RichErrorBoundary>
            </RelayEnvironmentProvider>
        );
    }
    return <WarningMissingURLParams />;
};

export const RelayRootMain = ({ userName, repoName }) => {
    const variables = {
        userName: singleArgOrDefault(userName, ''),
        repoName: singleArgOrDefault(repoName, ''),
    };
    const userData = useLazyLoadQuery<relayPageUserQuery>(userQuery, variables);
    const repoData = useLazyLoadQuery<relayPageRepoQuery>(repoQuery, variables);

    const doMergePR: DoMergePR = async (num) => {
        if (repoName && userName) {
            return await mergePullRequest({
                owner: userName,
                repo: repoName,
                pull_number: num,
            });
        }
        return;
    };

    return (
        <ShowUserRepoContent
            userData={userData}
            repoData={repoData}
            doMergePR={doMergePR}
            repoName={repoName}
            userName={userName}
        />
    );
};

function ShowUserRepoContent({ userData, repoData, doMergePR, userName, repoName }) {
    return (
        <UILibContext.Provider value={UILibWithRelaySupport}>
            <UserRepo
                user={userData.user}
                repo={repoData.repo}
                doMergePR={doMergePR}
                repoName={repoName}
                userName={userName}
            />
        </UILibContext.Provider>
    );
}

export default RelayRoot;
