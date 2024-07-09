'use server'
// async data loading works only on the server side

import React from 'react';

import { getAuthorizedGitHub, User } from 'restinpeace/github';

import { RepoType } from 'components/Repo';
import UserRepo from 'container/UserRepo';

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
}

    return <UserRepo user={userData} repo={repoData} />;
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
