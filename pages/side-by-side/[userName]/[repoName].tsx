import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

import { Spinner } from '../../../components/Spinner';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';
import InternalLink from '../../../components/InternalLink';

import { WaitForAll } from '../../wait-for-all/[userName]/[repoName]';
import { WaterfallMain } from '../../waterfall/[userName]/[repoName]';
import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { DoMergePR } from '../../../restinpeace/github';
import { mergePullRequest } from '../../../lib/github';
import { singleArgOrDefault } from '../../../components/singleArgOrDefault';

import styles from './side-by-side.module.css';

export const SideBySide = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;

    const doMergePR: DoMergePR = async (num) => {
        if (repoName && userName) {
            return await mergePullRequest({
                owner: singleArgOrDefault(userName, ''),
                repo: singleArgOrDefault(repoName, ''),
                pull_number: num,
            });
        }
        return;
    };

    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }

        return (
            <div>
                <InternalLink href={`/side-by-side/`}>back to shortcut list</InternalLink>

                {userName && repoName && (
                    <Suspense fallback={<Spinner />}>
                        <div className={styles.sideBySide}>
                            <div className={styles.side}>
                                <UILibContext.Provider value={UILibPureComponents}>
                                    <WaterfallMain userName={userName} repoName={repoName} doMergePR={doMergePR} />
                                </UILibContext.Provider>
                            </div>
                            <div className={styles.side}>
                                <UILibContext.Provider value={UILibPureComponents}>
                                    <WaitForAll userName={userName} repoName={repoName} doMergePR={doMergePR} />
                                </UILibContext.Provider>
                            </div>
                        </div>
                    </Suspense>
                )}
            </div>
        );
    } else {
        console.log('no username or repoName...');
    }
    return <WarningMissingURLParams />;
};

export default SideBySide;
