// do not add 'use client' here, because it is using React cache, and the async data loading works only on the server side

import React from 'react';

import { getAuthorizedGitHub, User } from 'restinpeace/github';

import { RepoType } from 'components/Repo';
import { AsyncUserRepo } from 'container/AsyncUserRepo';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
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
                <ReactNext userData={userData} repoData={repoData} />
            </UserRepoFromUrlProvider>
        </>
    );
}

async function ReactNext({ repoData, userData }: Props) {
    // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
    return <AsyncUserRepo userData={userData} repoData={repoData} />;
}

const fetchUserPromise: (userName) => Promise<User> = (async (userName) => {
    await delay(500);
    return getAuthorizedGitHub().fetchUser(userName);
});

const fetchRepoBranches: ({ userName, repoName }) => Promise<RepoType> = (async ({ userName, repoName }) => {
    await delay(500);
    return fetchRepoBranchesWithCommitStatusesAndPullRequestsProm({ userName, repoName });
});

const fetchRepoBranchesWithCommitStatusesAndPullRequestsProm = (async ({ userName, repoName }) =>
    getAuthorizedGitHub()
        .fetchRepoBranchesWithCommitStatuses({ userName, repoName })
        .then((branchesWithCommit) => ({
            name: repoName,
            owner: { login: userName },
            branches: branchesWithCommit.branches,
        }))
);
