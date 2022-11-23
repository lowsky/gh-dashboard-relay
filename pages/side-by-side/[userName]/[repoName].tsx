import { useRouter } from 'next/router';
import React from 'react';

import styles from './side-by-side.module.css';
import InternalLink from "../../../components/InternalLink";

import { WaitForAll } from '../../wait-for-all/[userName]/[repoName]';
import { WaterfallMain } from '../../waterfall/[userName]/[repoName]';

export const SideBySide = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;
    if (userName && repoName) {

        return (
            <div>
                <InternalLink href={`/side-by-side/`}>
                    back to shortcut list
                </InternalLink>

                {userName && repoName && (
                    <Suspense fallback={<Spinner />}>
                        <div className={styles.sideBySide}>
                            <div className={styles.side}>
                                <UILibContext.Provider value={UILibPureComponents}>
                                    <WaterfallMain userName={userName} repoName={repoName} />
                                </UILibContext.Provider>
                            </div>
                            <div className={styles.side}>
                                <UILibContext.Provider value={UILibPureComponents}>
                                    <WaitForAll userName={userName} repoName={repoName} />
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
