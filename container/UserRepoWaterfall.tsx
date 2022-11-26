import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import { DoMergePR } from '../restinpeace/github';
import { Spinner } from '../components/Spinner';
import RichErrorBoundary from '../components/RichErrorBoundary';
import Repo from '../components/Repo';
import { LazyBranchTable, LazyUser } from './LazyUserRepo';

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    userName: string;
    repoName: string;
}>;

export const UserRepoWaterfall: React.FunctionComponent<UserRepoProps> = ({ doMergePR, userName, repoName }) => {
    return (
        <Flex gap="4" direction="column">
            <Repo userName={userName} repoName={repoName} />

            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={'User not found'}>
                    <LazyUser userName={userName} />
                </RichErrorBoundary>
            </Suspense>

            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={null}>
                    <LazyBranchTable repoName={repoName} userName={userName} doMergePR={doMergePR} />
                </RichErrorBoundary>
            </Suspense>
        </Flex>
    );
};

export default UserRepoWaterfall;
