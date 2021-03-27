import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { initEnvironment } from '../../../lib/relay';

import GithubQuery from '../../../queries/relayPage';
//import { WarningMissingURLParams } from '../src/routes';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';
import ErrorBoundaryWithRetry from '../../../relay/ErrorBoundaryWithRetry';
import UILibContext from '../../../components/UILibContext';
import UserRepo from '../../../relay/UserRepo';
import { UILibWithRelaySupport } from '../../../components';

const RelayRoot = () => {
    const router = useRouter();
    const { userName, repoName } = router?.query ?? {
        userName: 'lowsky',
        repoName: 'dashboard',
    };
    const environment = initEnvironment();

    if (!userName || !repoName) {
        return WarningMissingURLParams;
    }

    if (!global.window) {
        return <h1>SSR rendering</h1>;
    }

    const preloadedQuery = loadQuery(environment, GithubQuery, { userName, repoName });

    return (
        <ErrorBoundaryWithRetry
            fallback={({ error }) => {
                console.error('Failure while rendering in relay root container:', error);
                return (
                    <div className="notification has-text-danger">
                        Error! While trying to load data from the server: {JSON.stringify(error)}
                    </div>
                );
            }}>
            <Suspense fallback={<ContentLoadingFallback/>}>
                <ShowUserRepoContent preloadedQuery={preloadedQuery} />
            </Suspense>
        </ErrorBoundaryWithRetry>
    );
};

function ShowUserRepoContent({preloadedQuery}) {
    // Immediately load the query as our app starts. For a real app, we'd move this
    // into our routing configuration, preloading data ShowUserRepoConentition to new routes.
    const data = usePreloadedQuery(GithubQuery, preloadedQuery);

    return (
        <UILibContext.Provider value={UILibWithRelaySupport}>
            <div className="box">
                <UserRepo github={data.github} />
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

/*
export async function getStaticProps() {
  const params = {}
  const environment = initEnvironment()
  const queryProps = await fetchQuery(environment, GithubQuery, {
    userName: params?.userName ?? "lowsky",
    repoName: params?.repoName ?? "dashboard"
  })
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      ...queryProps,
      initialRecords,
    },
  }
}
 */


export default RelayRoot;
