import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import { Spinner } from '../components/Spinner';
import {
    DoMergePR,
    fetchRepoBranchesWithCommitStatuses,
    fetchUser,
} from '../restinpeace/github';
import RichErrorBoundary from '../components/RichErrorBoundary';
import Repo from '../components/Repo';
import User from '../components/User';
import BranchesTable from './BranchesTable';

import { cache, createResource } from "../restinpeace/reactCache";

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    userName: string;
    repoName: string;
}>;

const branchesWithStatusesInfoHash = (userName, repoName) => `${userName}/${repoName}/br+stats`;

const getBranches = createResource(
    ({ userName, repoName }) => fetchRepoBranchesWithCommitStatuses({ userName, repoName }),
    ({ userName, repoName }) => branchesWithStatusesInfoHash(userName, repoName)
);

export const UserRepoFetchAll: React.FunctionComponent<UserRepoProps> = ({ doMergePR, userName, repoName }) => {
    return (
        <Flex gap="4" direction="column">
            <Repo userName={userName} repoName={repoName} />

            <LazyUser userName={userName} />
            <LazyBranchTable repoName={repoName} userName={userName} doMergePR={doMergePR} />
        </Flex>
    );
};

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

// fetchUser = async (username: string): Promise<User>;
export const getUser = createResource(fetchUser);

const LazyUser = ({ userName }) => {
    const user = getUser.read(cache, userName);

    return <User user={user} />;
};

const LazyBranchTable: React.FunctionComponent<{
    userName: string;
    repoName: string;
    doMergePR?: DoMergePR;
}> = ({ doMergePR, userName, repoName }) => {
    const repo = getBranches.read(cache, { userName, repoName });

    return <BranchesTable doMergePR={doMergePR} repo={repo} />;
};
