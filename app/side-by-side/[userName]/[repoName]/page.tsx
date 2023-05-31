'use client';

import React, { Suspense } from 'react';
import { Center, Heading, HStack } from '@chakra-ui/react';

import { Spinner } from '../../../../components/Spinner';
import InternalLink from '../../../../components/InternalLink';

import { UserRepoFromUrlProvider } from '../../../../components/useUserRepoFromRoute';
import { WaitForAll } from '../../../wait-for-all/[userName]/[repoName]/page';
import { WaterfallMain } from '../../../waterfall/[userName]/[repoName]/page';

import styles from './side-by-side.module.css';

export function SideBySide(props) {
    const { userName, repoName } = props.params;
    return (
        <UserRepoFromUrlProvider>
            <p>
                <InternalLink href={`/side-by-side/`}>back to shortcut list</InternalLink>
            </p>

            <div className={styles.sideBySide}>
                <Suspense fallback={<Spinner />}>
                    <div className={styles.side}>
                        <Center>
                            <HStack>
                                <Heading size="md">Waterfall</Heading>
                                <InternalLink href={`/waterfall/${userName}/${repoName}`}>show only</InternalLink>
                            </HStack>
                        </Center>
                        <WaterfallMain />
                    </div>
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <div className={styles.side}>
                        <Center>
                            <HStack>
                                <Heading size="md">Wait for loading all at once</Heading>
                                <InternalLink href={`/wait-for-all/${userName}/${repoName}`}>show only</InternalLink>
                            </HStack>
                        </Center>
                        <WaitForAll />
                    </div>
                </Suspense>
            </div>
        </UserRepoFromUrlProvider>
    );
}

export default SideBySide;
