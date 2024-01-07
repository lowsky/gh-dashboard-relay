'use server'
// async data loading works only on the server side

import React from 'react';

import { getAuthorizedGitHub, User } from 'restinpeace/github';

import { RepoType } from 'components/Repo';
import { AsyncUserRepo } from 'container/AsyncUserRepo';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';
import InternalLink from 'components/InternalLink';

interface Props {
    userData: Promise<User>;
    repoData: Promise<RepoType>;
    userName: string;
    repoName: string;
}

// @ts-ignore do not use in production
function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export default async function Page(props) {
    const { params } = props;
    const { userName, repoName } = params;

    const userData = fetchUserPromise(userName);
    const repoData = fetchRepoBranches({ userName, repoName });

    return (
        <>
            <InternalLink href="/next">Back to shortcut list</InternalLink>
            <UserRepoFromUrlProvider>
                {
                    // @ts-expect-error the async function ReactNext cannot be used as React component.
                    <ReactNext userData={userData} repoData={repoData} userName={userName} repoName={repoName}/>
                }
            </UserRepoFromUrlProvider>
        </>
    );
}

async function ReactNext({ repoData, userData, userName, repoName }: Props) {
    // @ts-expect-error TS2786: Its return type 'Promise<Element>' is not a valid JSX element.
    return <AsyncUserRepo userData={userData} repoData={repoData} userName={userName} repoName={repoName}/>;
}

const fetchUserPromise: (userName) => Promise<User> = async (userName) => {
    await delay(200);
    return getAuthorizedGitHub().fetchUser(userName);
};

const fetchRepoBranches: ({ userName, repoName }) => Promise<RepoType> = async ({ userName, repoName }) => {
    await delay(200);
    return fetchRepoBranchesWithCommitStatusesAndPullRequestsProm({ userName, repoName });
};

const fetchRepoBranchesWithCommitStatusesAndPullRequestsProm = async ({ userName, repoName }) =>
    getAuthorizedGitHub()
        .fetchRepoBranchesWithCommitStatuses({ userName, repoName })
        .then((branchesWithCommit) => ({
            name: repoName,
            owner: { login: userName },
            branches: branchesWithCommit.branches,
        }));
