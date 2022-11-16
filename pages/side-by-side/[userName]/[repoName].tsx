import { useRouter } from 'next/router';
import React from 'react';

import styles from './side-by-side.module.css';

import { RestfulMain } from '../../restful/[userName]/[repoName]';

export const SideBySide = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;


    return (
        <div>
            <div className={styles.sideBySide}>
                <div className={styles.side}>
                    <RestfulMain userName={userName} repoName={repoName} />
                </div>
            </div>
        </div>
    );
};

export default SideBySide;
