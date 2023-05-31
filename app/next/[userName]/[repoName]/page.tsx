// do not activate 'use client' ! - using react cache and async data loading works only on server side

import React, { cache, Suspense } from 'react';

import { fetchRepoBranchesWithCommitStatusesAndPullRequests, fetchUser, User } from '../../../../restinpeace/github';
import UserRepo from '../../../../container/UserRepo';
import { Spinner } from '../../../../components/Spinner';
import { RepoType } from '../../../../components/Repo';
import { UserRepoFromUrlProvider } from '../../../../components/useUserRepoFromRoute';
import { UILibClientWrapper } from '../../../UILibClientWrapper';
import InternalLink from '../../../../components/InternalLink';

interface Props {
    userData: Promise<User>;
    repoData: Promise<RepoType>;
}

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export default async function Page(props) {
    const { params } = props;
    const { userName, repoName } = params;

    const userData: Promise<User> = fetchUserPromise(userName);
    const repoData: Promise<RepoType> = fetchRepoBranches({ userName, repoName });

    return (
        <UserRepoFromUrlProvider>
            <p>
                <InternalLink href={`/next`}>back to shortcut list</InternalLink>
            </p>

            <Suspense fallback={<Spinner />}>
                <UILibClientWrapper>
                    {
                        // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
                        <ReactNext userData={userData} repoData={repoData} />
                    }
                </UILibClientWrapper>
            </Suspense>
        </UserRepoFromUrlProvider>
    );
}

async function ReactNext({ repoData, userData }: Props) {
    const user = await userData;
    const repo: RepoType = await repoData;
    return <UserRepo user={user} repo={repo} />;
}

const fetchUserPromise: (userName) => Promise<User> = cache(async (userName) => {
    await delay(500);
    return fetchUser(userName);
});
const fetchRepoBranches: ({ userName, repoName }) => Promise<RepoType> = cache(async ({ userName, repoName }) => {
    await delay(500);
    return fetchRepoBranchesWithCommitStatusesAndPullRequestsProm({ userName, repoName });
});

const fetchRepoBranchesWithCommitStatusesAndPullRequestsProm = cache(async ({ userName, repoName }) =>
    fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName }).then((branchesWithCommit) => ({
        name: repoName,
        owner: { login: userName },
        branches: branchesWithCommit.branches,
    }))
);
