import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { UserRepoProps } from '../../../container/UserRepo';
import UILibContext from '../../../components/UILibContext';
import { UILibWithRelaySupport } from '../../../components';
import UserRepo from '../../../relay/UserRepo';
import ErrorBoundaryWithRetry from '../../../relay/ErrorBoundaryWithRetry';
import GithubQuery from '../../../queries/relayPage';
import { relayPageQuery, relayPageQueryVariables } from '../../../queries/__generated__/relayPageQuery.graphql';

function singleArgOrDefault(value: string | string[], defaultValue?: string) {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    if (typeof value === 'string') {
        return value;
    }
    return String(value);
}

const RelayRoot = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;

    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return (
            <ErrorBoundaryWithRetry>
                <Suspense fallback={<ContentLoadingFallback />}>
                    <RelayRootMain userName={userName} repoName={repoName} />
                </Suspense>
            </ErrorBoundaryWithRetry>
        );
    }
    return <ContentLoadingFallback />;
};

export const RelayRootMain = ({ userName, repoName }) => {
    const variables: relayPageQueryVariables = {
        userName: singleArgOrDefault(userName) ?? '',
        repoName: singleArgOrDefault(repoName) ?? '',
    };

    const data = useLazyLoadQuery<relayPageQuery>(GithubQuery, variables);

    return <ShowUserRepoContent data={data} />;
};

function ShowUserRepoContent({ data }) {
    const github: UserRepoProps['github'] = data.github;
    return (
        <UILibContext.Provider value={UILibWithRelaySupport}>
            <div className="box">
                <UserRepo github={github} />
            </div>
        </UILibContext.Provider>
    );
}

function ContentLoadingFallback() {
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
