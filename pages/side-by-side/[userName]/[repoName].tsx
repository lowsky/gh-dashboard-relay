import { useRouter } from 'next/router';
import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import styles from './side-by-side.module.css';

import { RestfulMain } from '../../restful/[userName]/[repoName]';

export const SideBySide = () => {
    const router = useRouter();
    const { userName, repoName } = router.query;

    if (typeof window === 'undefined') {
        return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
    }

    return (
        <div>
            <Link passHref legacyBehavior href={`/side-by-side/`}>
                <ChakraLink>back to MENU</ChakraLink>
            </Link>
            {userName && repoName && (
                <div className={styles.sideBySide}>
                    <div className={styles.side}>
                        <RestfulMain userName={userName} repoName={repoName} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBySide;
