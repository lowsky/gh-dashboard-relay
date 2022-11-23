import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';
import { createCache } from 'simple-cache-provider';
import { createResource as createResourceViaHitchcock } from 'hitchcock';

import { DoMergePR, fetchRepoBranches, fetchUser } from './github';
import { Spinner } from '../components/Spinner';
import { fetchRepoPullRequestsAssociatedWithCommit, getLastCommit } from '../lib/github';
import { GithubStatus } from '../lib/types/resolvers';
import { commitStatusResolver } from '../lib/resolvers';
import RichErrorBoundary from '../components/RichErrorBoundary';
import Repo from '../components/Repo';
import User from '../components/User';
import BranchesTable from '../container/BranchesTable';

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    userName: string;
    repoName: string;

    //tweak
    fetchAllThen?: boolean;
}>;

// hitchcock uses its own cache, so we ignore it here
export const createResource = (args, ...hash) => {
    const resource = createResourceViaHitchcock(args, ...hash);
    return { read: (_cache, args) => resource.read(args) };
};

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

const branchesFullInfoHash = (userName, repoName) => `${userName}/${repoName}/branches`;

const getBranches = createResource(
    ({ userName, repoName }) => fetchRepoBranchesWithCommitStatusAndPR({ userName, repoName }),
    ({ userName, repoName }) => branchesFullInfoHash(userName, repoName)
);

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

            <LazyUser userName={userName} />
            <LazyBranchTable repoName={repoName} userName={userName} doMergePR={doMergePR} />
        </Flex>
    );
};

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

// fetchUser = async (username: string): Promise<User>;

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
