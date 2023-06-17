'use client';
import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

import RichErrorBoundary from 'components/RichErrorBoundary';
import { Spinner } from 'components/Spinner';
import Repo, { RepoType } from 'components/Repo';
import User, { UserType } from 'components/User';

import BranchesTable from './BranchesTable';

interface Props {
    userData: Promise<UserType>;
    repoData: Promise<RepoType>;
}

export const AsyncUserRepo = async ({ userData, repoData }: Props) => {
    return (
        <Flex gap="4" direction="column">
            <Suspense fallback={<Spinner />}>
                {
                    // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
                    <LazyRepo repoData={repoData} />
                }
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={'User not found'}>
                    {
                        // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
                        <LazyUser user={userData} />
                    }
                </RichErrorBoundary>
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={null /* ignore errors here*/}>
                    {
                        // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
                        <LazyBranchTable repo={repoData} />
                    }
                </RichErrorBoundary>
            </Suspense>
        </Flex>
    );
};

export const LazyRepo = async ({ repoData }) => {
    return <Repo repo={await repoData} />;
};

export const LazyUser = async ({ user }) => {
    return <User user={await user} />;
};

export const LazyBranchTable = async ({ repo }) => {
    return <BranchesTable repo={await repo} />;
};
