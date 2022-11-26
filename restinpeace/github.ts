import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from '@octokit/types';

import { GithubCommit, GithubStatus } from './types';

const { GITHUB_TOKEN } = process.env;

export const octo = new Octokit({
    GITHUB_TOKEN,
});

export const getCommitsForRepo = async (
    username: string,
    reponame: string,
    sha?: string
): Promise<Array<GithubCommit>> => {
    const commits = await octo.repos.listCommits({
        sha,
        owner: username,
        repo: reponame,
    });
    return commits.data;
};

export const getStatusesForRepo = async (username, reponame, sha): Promise<Array<GithubStatus>> => {
    const statuses = await octo.repos.listCommitStatusesForRef({
        ref: sha,
        repo: reponame,
        owner: username,
    });

    return statuses.data;
};

type ListPullRequestsAssociatedWithCommitResponseType = GetResponseTypeFromEndpointMethod<
    typeof octo.repos.listPullRequestsAssociatedWithCommit
>;
export type ListPullRequestsAssociatedWithCommitResponseDataType = GetResponseDataTypeFromEndpointMethod<
    typeof octo.repos.listPullRequestsAssociatedWithCommit
>;

export type MergePullRequestsResponseDataType = GetResponseDataTypeFromEndpointMethod<typeof octo.pulls.merge>;

/**
 * Fetch the PR info for a given repo
 *
 * @param owner user's login name, e.g. lowsky
 * @param repo repo's name
 * @param commit_sha
 */
export const fetchRepoPullRequestsAssociatedWithCommit = async (
    owner: string,
    repo: string,
    commit_sha: string
): Promise<ListPullRequestsAssociatedWithCommitResponseDataType> => {
    const pulls: ListPullRequestsAssociatedWithCommitResponseType =
        await octo.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha });
    return pulls.data;
};

export const mergePullRequest = ({
    owner,
    repo,
    pull_number,
    sha,
    merge_method = 'rebase',
}: {
    owner: string;
    repo: string;
    pull_number: number;
    sha?: string;
    merge_method?: 'rebase' | 'merge';
}): Promise<MergePullRequestsResponseDataType> => {
    const result = octo.pulls.merge({
        owner,
        repo,
        merge_method,
        sha,
        pull_number,
    });
    // @ts-expect-error type is not exact matching - needs fix
    return result;
};

export function getLastCommit(
    ownerUsername: string,
    reponame: string,
    sha
): Promise<
    GithubCommit & {
        message: string;
        date: string;
        ownerUsername: string;
        reponame: string;
    }
> {
    return getCommitsForRepo(ownerUsername, reponame, sha) //
        .then((commits) => commits[0])
        .then((commit) => {
            // @ts-expect-error commit is not available in the type - needs fix
            const message = commit.commit.message;
            // @ts-expect-error commit is not available in the type - needs fix
            const date = commit.commit.committer?.date;
            return {
                ...commit,
                message,
                date,
                ownerUsername,
                reponame,
            };
        });
}

export const fetchCommitStatuses = (commit) => {
    const { sha, ownerUsername, reponame } = commit;
    if (!sha) return Promise.resolve([] as Array<GithubStatus>);

    return (
        getStatusesForRepo(
            ownerUsername, //username,
            reponame,
            sha
        ) ?? []
    );
};

export interface Commit {
    sha: string;
    url: string;
}

export type Branches = {
    commit: Commit;
    name: string;
}[];
/**
 * Fetch the branches for a given repo
 *
 * @param owner user's login name, e.g. lowsky
 * @param repo repo's name
 */
export const fetchRepoBranches = async (owner: string, repo: string): Promise<Branches> => {
    const listBranches = octo.repos.listBranches({ owner, repo });
    const branches = await listBranches;
    return await branches.data;
};

export interface User {
    login: string;
    avatar_url: string;
}

/**
 * Fetch the user info for a given login
 *
 * @param username user's login name, e.g. lowsky
 */
export const fetchUser = async (username: string): Promise<User> => {
    return octo.users.getByUsername({ username }).then((byUsername) => {
        return byUsername.data as User;
    });
};

export type DoMergePR = (num: number) => Promise<unknown>;

export async function fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName }) {
    const branches = await fetchRepoBranches(userName, repoName);

    const branchesWithCommitProms = branches.map(async (branch) => {
        const { sha } = branch.commit;

        const lastCommit = await getLastCommit(userName, repoName, sha);
        const statuses = await fetchLastCommitStatuses(lastCommit);

        const associatedPullRequests = await fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha);

        return {
            ...branch,
            lastCommit: {
                ...lastCommit,
                statuses,
                associatedPullRequests,
            },
        };
    });

    return {
        name: repoName,
        owner: { login: userName },
        branches: await Promise.all(branchesWithCommitProms),
    };
}
export async function fetchRepoBranchesWithCommitStatuses({ userName, repoName }) {
    const branches = await fetchRepoBranches(userName, repoName);

    const branchesWithCommitProms = branches.reverse().map(async (branch) => {
        const { sha } = branch.commit;

        const lastCommit = await getLastCommit(userName, repoName, sha);
        const statuses = await fetchLastCommitStatuses(lastCommit);

        return {
            ...branch,
            lastCommit: {
                ...lastCommit,
                statuses,
            },
        };
    });

    return {
        name: repoName,
        owner: { login: userName },
        branches: await Promise.all(branchesWithCommitProms),
    };
}

async function fetchLastCommitStatuses(commit: {
    sha?: string | null | undefined;
    ownerUsername: string;
    reponame: string;
}) {
    const { sha, ownerUsername, reponame } = commit;
    if (sha) {
        return await fetchCommitStatuses({
            sha,
            ownerUsername,
            reponame,
        });
    }
    return [];
}
