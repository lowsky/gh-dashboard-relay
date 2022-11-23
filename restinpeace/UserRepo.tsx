import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';
import { createCache } from 'simple-cache-provider';
import { createResource as createResourceViaHitchcock } from 'hitchcock';

import { DoMergePR, fetchRepoBranchesWithCommitStatuses, fetchUser } from './github';
import { Spinner } from '../components/Spinner';
import RichErrorBoundary from '../components/RichErrorBoundary';
import Repo from '../components/Repo';
import User from '../components/User';
import BranchesTable from '../container/BranchesTable';

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    userName: string;
    repoName: string;
}>;

// hitchcock uses its own cache, so we ignore it here
export const createResource = (args, ...hash) => {
    const resource = createResourceViaHitchcock(args, ...hash);
    return { read: (_cache, args) => resource.read(args) };
};

const branchesFullInfoHash = (userName, repoName) => `${userName}/${repoName}/branches`;

const getBranches = createResource(
    ({ userName, repoName }) => fetchRepoBranchesWithCommitStatuses({ userName, repoName }),
    ({ userName, repoName }) => branchesFullInfoHash(userName, repoName)
);

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

// Provided by 'simple-cache-provider'
const cache = createCache();

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
