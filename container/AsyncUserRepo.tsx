'use client';
import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import { RevalidateCacheButton } from 'components/RevalidateCacheButton';
import RichErrorBoundary from 'components/RichErrorBoundary';
import { Spinner } from 'components/Spinner';
import Repo, { RepoType } from 'components/Repo';
import User, { UserType } from 'components/User';

import BranchesTable from './BranchesTable';

interface Props {
    userData: Promise<UserType>;
    repoData: Promise<RepoType>;
    userName: string;
    repoName: string;
}

export const AsyncUserRepo = async ({ userData, repoData, userName, repoName }: Props) => (
    <Flex gap="4" direction="column">
        <Suspense fallback={<Spinner />}>
            <RichErrorBoundary message="Repo not found">
                <Repo repo={await repoData} />
            </RichErrorBoundary>
        </Suspense>
        <Suspense fallback={<Spinner />}>
            <RichErrorBoundary message="User not found">
                <User user={await userData} />
            </RichErrorBoundary>
        </Suspense>
        <RevalidateCacheButton pathPrefix="/next" userName={userName} repoName={repoName} />
        <Suspense fallback={<Spinner />}>
            <RichErrorBoundary message={null /* ignore errors here*/}>
                <BranchesTable repo={await repoData} />
            </RichErrorBoundary>
        </Suspense>
    </Flex>
);
