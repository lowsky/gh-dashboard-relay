import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';
import { createCache } from 'simple-cache-provider';
import { createResource as createResourceViaHitchcock } from 'hitchcock';

import { fetchRepoBranches, fetchUser } from './fetchGithubApi';
import { Spinner } from '../components/Spinner';
import { getLastCommit } from '../lib/github';
import { GithubStatus } from '../lib/types/resolvers';
import { commitStatusResolver } from '../lib/resolvers';
import RichErrorBoundary from '../components/RichErrorBoundary';
import Repo from '../components/Repo';
import User from '../components/User';
import BranchesTable from '../container/BranchesTable';

export type DoMergePR = (num: number) => Promise<unknown>;

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    userName: string;
    repoName: string;

    //tweak
    fetchAllThen?: boolean;
}>;

const cache = createCache();

// hitchcock has its own cache
export const createResource = (args, hash) => {
    const resource = createResourceViaHitchcock(args, hash);
    return { read: (_cache, args) => resource.read(args) };
};

const getUser = createResource(fetchUser, undefined);

const userRepoHash = ({ userName, repoName }) => `${userName}/${repoName}/branches`;

export async function fetchRepoBranchesWithCommitStatusAndPR({ userName, repoName }) {
    const branches = await fetchRepoBranches(userName, repoName);

    const branchesWithCommitProms = branches.map(async (branch) => {
        const { sha } = branch.commit;

        const lastCommit = await getLastCommit(userName, repoName, sha);
        const statuses = await fetchLastCommitStatuses(lastCommit);

        //const pr = await fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha);

        return {
            ...branch,
            lastCommit: {
                ...lastCommit,
                statuses,
                //        associatedPullRequests: pr,
            },
        };
    });

    return {
        name: repoName,
        owner: { login: userName },
        branches: await Promise.all(branchesWithCommitProms),
    };
}

const getBranches = createResource(fetchRepoBranchesWithCommitStatusAndPR, userRepoHash);

async function fetchLastCommitStatuses(commit: {
    sha?: string | null | undefined;
    ownerUsername: string;
    reponame: string;
}) {
    const { sha, ownerUsername, reponame } = commit;
    if (sha) {
        const statuses: Array<GithubStatus> = await commitStatusResolver({
            sha,
            ownerUsername,
            reponame,
        });
        return statuses;
    }
    return [];
}

export const UserRepoFetchAll: React.FunctionComponent<UserRepoProps> = ({ doMergePR, userName, repoName }) => {
    return (
        <Flex gap="4" direction="column">
            <Repo userName={userName} repoName={repoName} />

            <DelayedUser userName={userName} />
            <DelayedBranchTable repoName={repoName} userName={userName} doMergePR={doMergePR} />
        </Flex>
    );
};

export const UserRepoWaterfall: React.FunctionComponent<UserRepoProps> = ({ doMergePR, userName, repoName }) => {
    return (
        <Flex gap="4" direction="column">
            <Repo userName={userName} repoName={repoName} />

            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={'User not found'}>
                    <DelayedUser {...{ doMergePR, userName, repoName }} />
                </RichErrorBoundary>
            </Suspense>

            <Suspense fallback={<Spinner />}>
                <RichErrorBoundary message={null}>
                    <DelayedBranchTable repoName={repoName} userName={userName} doMergePR={doMergePR} />
                </RichErrorBoundary>
            </Suspense>
        </Flex>
    );
};

const DelayedUser = ({ userName }) => {
    const user = getUser.read(cache, userName);

    return <User user={user} />;
};

const DelayedBranchTable: React.FunctionComponent<{
    userName: string;
    repoName: string;
    doMergePR?: DoMergePR;
}> = ({ doMergePR, userName, repoName }) => {
    const repo = getBranches.read(cache, { userName, repoName });

    return <BranchesTable doMergePR={doMergePR} repo={repo} />;
};

export default UserRepoWaterfall;
