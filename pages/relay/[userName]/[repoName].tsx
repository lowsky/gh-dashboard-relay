import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';

import { UILibWithRelaySupport } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import UserRepo from '../../../relay/UserRepo';
import { initEnvironment } from '../../../lib/relay';
import {
    relayPageQuery,
    relayPageQueryResponse,
    relayPageQueryVariables,
} from '../../../queries/__generated__/relayPageQuery.graphql';
import GithubQuery from '../../../queries/relayPage';
import ErrorBoundaryWithRetry from '../../../relay/ErrorBoundaryWithRetry';
import { UserRepoProps } from '../../../container/UserRepo';

function singleArgOrDefault(value: string | string[] , defaultValue?: string) {
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

    if(userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return <RelayRootMain userName={userName} repoName={repoName} />;
    }
    return <ContentLoadingFallback />
}

export const RelayRootMain = ({ userName, repoName }) => {

    const environment = initEnvironment();

    const variables: relayPageQueryVariables = {
        userName: singleArgOrDefault(userName) ?? '',
        repoName: singleArgOrDefault(repoName) ?? '',
    };


    const preloadedQuery = userName && repoName && loadQuery<relayPageQuery>(environment, GithubQuery, variables);
    return (
        <ErrorBoundaryWithRetry
            fallback={({ error }) => (
                <div className="notification has-text-danger">
                    Error! While trying to load data from the server: {JSON.stringify(error)}
                </div>
            )}>
            <Suspense fallback={<ContentLoadingFallback />}>{preloadedQuery && <ShowUserRepoContent preloadedQuery={preloadedQuery} />
            }</Suspense>
        </ErrorBoundaryWithRetry>
    );
};

function ShowUserRepoContent({ preloadedQuery }) {
    // Immediately load the query as our app starts. For a real app, we'd move this
    // into our routing configuration, preloading data ShowUserRepoContent to new routes.
    const data: relayPageQueryResponse = usePreloadedQuery<relayPageQuery>(GithubQuery, preloadedQuery);

    // @ts-ignore
    const github: UserRepoProps['github'] = data.github; // relay interface looks different, need further inspection
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
