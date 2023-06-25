import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import {
    fetchRepoBranchesWithCommitStatuses,
    fetchRepoBranchesWithCommitStatusesAndPullRequests,
    fetchUser,
} from 'restinpeace/github';
import { useUserRepo } from 'components/useUserRepoFromRoute';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { Spinner } from 'components/Spinner';
import Repo from 'components/Repo';
import User from 'components/User';

import BranchesTable from 'container/BranchesTable';

import { createResource } from 'cache/reactCache';

const branchesWithStatusesInfoHash = (userName, repoName) => `${userName}/${repoName}/br+stats`;

const getBranches = createResource(
    ({ userName, repoName }) => fetchRepoBranchesWithCommitStatuses({ userName, repoName }),
    ({ userName, repoName }) => branchesWithStatusesInfoHash(userName, repoName)
);

const getBranchesFull = createResource(
    ({ userName, repoName }) => fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName }),
    ({ userName, repoName }) => `br_full/${userName}/${repoName}/`
);

export const UserRepoFetchAll = () => {
    return (
        <Flex gap="4" direction="column">
            <Repo />
            <LazyUser />
            <LazyBranchTable loadAll />
        </Flex>
    );
};

export const UserRepoWaterfall = () => {
    return (
        <Flex gap="4" direction="column">
            <Suspense fallback={<Spinner />}>
                <Repo />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={'User not found'}>
                    <LazyUser />
                </RichErrorBoundary>
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={null /* ignore errors here*/}>
                    <LazyBranchTable />
                </RichErrorBoundary>
            </Suspense>
        </Flex>
    );
};

// fetchUser = async (username: string): Promise<User>;
export const getUser = createResource(fetchUser);

export const LazyUser = () => {
    const { userName } = useUserRepo();

    const user = getUser.read(userName);

    return <User user={user} />;
};

export const LazyBranchTable: React.FunctionComponent<{
    loadAll?: boolean;
}> = ({ loadAll }) => {
    const { userName, repoName } = useUserRepo();

    const repo = loadAll ? getBranchesFull.read({ userName, repoName }) : getBranches.read({ userName, repoName });

    return <BranchesTable repo={repo} />;
};
