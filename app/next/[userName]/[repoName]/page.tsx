// do not activate 'use client' ! - using react cache and async data loading works only on server side

import React, { cache } from 'react';

import { fetchRepoBranchesWithCommitStatusesAndPullRequests, fetchUser, User } from 'restinpeace/github';
import { RepoType } from 'components/Repo';
import { AsyncUserRepo } from 'container/AsyncUserRepo';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import { UILibClientWrapper } from 'components/UILibClientWrapper';
import InternalLink from 'components/InternalLink';

export const revalidate = 60;

interface Props {
    userData: Promise<User>;
    repoData: Promise<RepoType>;
}

// @ts-ignore - not used in production
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
        <>
            <p>
                <InternalLink href={`/next`}>back to shortcut list</InternalLink>
            </p>

            <UserRepoFromUrlProvider>
                <UILibClientWrapper>
                    {
                        // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
                        <ReactNext userData={userData} repoData={repoData} />
                    }
                </UILibClientWrapper>
            </UserRepoFromUrlProvider>
        </>
    );
}

async function ReactNext({ repoData, userData }: Props) {
    // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
    return <AsyncUserRepo userData={userData} repoData={repoData} />;
}

const fetchUserPromise: (userName) => Promise<User> = cache(async (userName) => {
    // await delay(500);
    return fetchUser(userName);
});
const fetchRepoBranches: ({ userName, repoName }) => Promise<RepoType> = cache(async ({ userName, repoName }) => {
    // await delay(500);
    return fetchRepoBranchesWithCommitStatusesAndPullRequestsProm({ userName, repoName });
});

const fetchRepoBranchesWithCommitStatusesAndPullRequestsProm = cache(async ({ userName, repoName }) =>
    fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName }).then((branchesWithCommit) => ({
        name: repoName,
        owner: { login: userName },
        branches: branchesWithCommit.branches,
    }))
);
