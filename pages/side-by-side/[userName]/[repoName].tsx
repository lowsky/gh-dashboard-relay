import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

import styles from './side-by-side.module.css';
import { ContentLoadingFallback, RelayRootMain } from '../../relay/[userName]/[repoName]';
import { RestfulMain } from '../../restful/[userName]/[repoName]';
import { useEnvironment } from '../../../lib/relay';
import ErrorBoundaryWithRetry from '../../../relay/ErrorBoundaryWithRetry';
import { RelayEnvironmentProvider } from 'react-relay';

export const SideBySide = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;

    const environment = useEnvironment({});

    return (
        <div>
            <div className={styles.sideBySide}>
                <div className={styles.side}>
                    {!(typeof window === 'undefined') && (
                        <RelayEnvironmentProvider environment={environment}>
                            <ErrorBoundaryWithRetry>
                                <Suspense fallback={<ContentLoadingFallback />}>
                                    <RelayRootMain userName={userName} repoName={repoName} />
                                </Suspense>
                            </ErrorBoundaryWithRetry>
                        </RelayEnvironmentProvider>
                    )}
                </div>
                <div className={styles.side}>
                    <RestfulMain userName={userName} repoName={repoName} />
                </div>
                {/*
                LATER: might work either ... ?
            <iframe className={styles.side} src={`/relay/${userName}/${repoName}`} frameBorder="0"></iframe>
            <iframe className={styles.side} src={`/restful/${userName}/${repoName}`} frameBorder="0"></iframe>
                 */}
            </div>
        </div>
    );
};

export default SideBySide;
