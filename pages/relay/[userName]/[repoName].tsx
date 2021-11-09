import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay/hooks';

import { DoMergePR } from '../../../container/UserRepo';
import UILibContext from '../../../components/UILibContext';
import { UILibWithRelaySupport } from '../../../components';
import UserRepo from '../../../relay/UserRepo';
import ErrorBoundaryWithRetry from '../../../relay/ErrorBoundaryWithRetry';
import { repoQuery, userQuery } from '../../../queries/relayPage';
import { mergePullRequest } from '../../../lib/github';
import { useEnvironment } from '../../../lib/relay';
import { relayPageUserQuery } from '../../../queries/__generated__/relayPageUserQuery.graphql';
import { relayPageRepoQuery } from '../../../queries/__generated__/relayPageRepoQuery.graphql';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';

function singleArgOrDefault(value: string | string[], defaultValue: string) {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    if (typeof value === 'string') {
        return value;
    }
    return String(value);
}

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
                <ErrorBoundaryWithRetry>
                    <Suspense fallback={<ContentLoadingFallback />}>
                        <RelayRootMain userName={userName} repoName={repoName} />
                    </Suspense>
                </ErrorBoundaryWithRetry>
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

    return <ShowUserRepoContent userData={userData} repoData={repoData} doMergePR={doMergePR} />;
};

function ShowUserRepoContent({ userData, repoData, doMergePR }) {
    return (
        <UILibContext.Provider value={UILibWithRelaySupport}>
            <div className="content">
                <div className="box">
                    <UserRepo user={userData.user} repo={repoData.repo} doMergePR={doMergePR} />
                </div>
            </div>
        </UILibContext.Provider>
    );
}

export function ContentLoadingFallback() {
    return (
        <div className="box">
            <span className="icon is-large ">
                <i className="fas fa-spinner fa-pulse" />
            </span>
            Loading ...
        </div>
    );
}

export default RelayRoot;
