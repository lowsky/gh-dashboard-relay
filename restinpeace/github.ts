import { GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from '@octokit/types';

import { GithubCommit, GithubStatus } from './types';
import { octo } from 'lib/github';

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

export const getStatusesForRepo = async (owner, repo, sha): Promise<Array<GithubStatus>> => {
    let repos = octo.repos;
    const statuses = await repos.listCommitStatusesForRef({
        ref: sha,
        repo,
        owner,
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
    return octo.pulls
        .merge({
            owner,
            repo,
            merge_method,
            sha,
            pull_number,
        })
        .then((response) => response.data);
};

export type DoMergePR = (num: number) => Promise<unknown>;

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

export const fetchCommitStatuses: (commit: {
    reponame: string;
    ownerUsername: string;
    sha: string;
}) => Promise<Array<GithubStatus>> = async (commit: { reponame: string; ownerUsername: string; sha: string }) => {
    const { sha, ownerUsername, reponame } = commit;

    if (!sha) {
        return [];
    }

    return (await getStatusesForRepo(ownerUsername, reponame, sha)) ?? [];
};

export interface Commit {
    sha: string;
    url: string;
}

export type Branch = {
    commit: Commit;
    name: string;
};

export type Branches = Branch[];

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
    company?: string|null;
    avatar_url: string;
}

/**
 * Fetch the user info for a given login
 *
 * @param username user's login name, e.g. lowsky
 */
export const fetchUser = async (username: string): Promise<User> =>
    await octo.users.getByUsername({ username }).then((response) => response.data);

export async function fetchRepoBranchesWithCommitStatusesAndPullRequests({
    userName,
    repoName,
}: {
    userName: string;
    repoName: string;
}): Promise<{
    owner: { login: string };
    name: string;
    branches: Awaited<
        Branch & {
            lastCommit: GithubCommit & {
                reponame: string;
                ownerUsername: string;
                statuses: Array<GithubStatus>;
                associatedPullRequests: ListPullRequestsAssociatedWithCommitResponseDataType;
            };
        }
    >[];
}> {
    const branches: Branches = await fetchRepoBranches(userName, repoName);

    const branchesWithCommitProms = branches.map(async (branch) => {
        const { sha } = branch.commit;

        const lastCommit: GithubCommit & {
            message: string;
            date: string;
            ownerUsername: string;
            reponame: string;
        } = await getLastCommit(userName, repoName, sha);

        const statuses: Array<GithubStatus> = await fetchLastCommitStatuses(lastCommit);

        const associatedPullRequests: ListPullRequestsAssociatedWithCommitResponseDataType =
            await fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha);

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

export async function fetchRepoBranchesWithCommitStatuses({
    userName,
    repoName,
}: {
    userName: string;
    repoName: string;
}): Promise<{
    owner: { login: string };
    name: string;
    branches: Awaited<
        Branch & {
            lastCommit: GithubCommit & {
                reponame: string;
                ownerUsername: string;
            };
        }
    >[];
}> {
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

export async function fetchLastCommitStatuses(commit: {
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
