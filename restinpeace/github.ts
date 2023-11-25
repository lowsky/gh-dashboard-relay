import { GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from '@octokit/rest';

import { GithubCommit, GithubStatus } from './types';

import { getBranchesForRepo, getRepoForUser, getReposForUser, getUser, octo as defaultOcto } from 'lib/github';

export interface User {
    login: string;
    company?: string | null;
    avatar_url: string;
}

export type DoMergePR = (num: number) => Promise<unknown>;

export type Branch = {
    commit: Commit;
    name: string;
};
export type Branches = Branch[];

export interface Commit {
    sha: string;
    url: string;
}

type ListPullRequestsAssociatedWithCommitResponseType = GetResponseTypeFromEndpointMethod<
    typeof defaultOcto.repos.listPullRequestsAssociatedWithCommit
>;

export type ListPullRequestsAssociatedWithCommitResponseDataType =
    ListPullRequestsAssociatedWithCommitResponseType['data'];

export type MergePullRequestsResponseDataType = GetResponseDataTypeFromEndpointMethod<typeof defaultOcto.pulls.merge>;

/**
 * Factory, to make octokit injectable
 *
 * @param octoOptional
 */
export function getAuthorizedGitHub(octoOptional?: Octokit) {
    const octo = octoOptional ?? defaultOcto;

    const getCommitsForRepo = async (
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

    const getStatusesForRepo = async (owner, repo, sha): Promise<Array<GithubStatus>> => {
        let repos = octo.repos;
        const statuses = await repos.listCommitStatusesForRef({
            ref: sha,
            repo,
            owner,
        });

        return statuses.data;
    };

    const mergePullRequest: ({
        owner,
        repo,
        pull_number,
        sha,
        merge_method,
    }: {
        owner: string;
        repo: string;
        pull_number: number;
        sha?: string;
        merge_method?: 'rebase' | 'merge';
    }) => Promise<MergePullRequestsResponseDataType> = ({
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

    function getLastCommit(
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

    const fetchCommitStatuses: (commit: {
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

    /**
     * Fetch the branches for a given repo
     *
     * @param owner user's login name, e.g. lowsky
     * @param repo repo's name
     */
    const fetchRepoBranches = async (owner: string, repo: string): Promise<Branches> => {
        const listBranches = octo.repos.listBranches({ owner, repo });
        const branches = await listBranches;
        return await branches.data;
    };

    /**
     * Fetch the user info for a given login
     *
     * @param username user's login name, e.g. lowsky
     */
    const fetchUser = async (username: string): Promise<User> =>
        await octo.users.getByUsername({ username }).then((response) => response.data);

    async function fetchRepoBranchesWithCommitStatusesAndPullRequests({
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

    async function fetchRepoBranchesWithCommitStatuses({
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

    const fetchRepoPullRequestsAssociatedWithCommit = async (
        owner: string,
        repo: string,
        commit_sha: string
    ): Promise<ListPullRequestsAssociatedWithCommitResponseDataType> => {
        const pulls: ListPullRequestsAssociatedWithCommitResponseType =
            await octo.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha });
        return pulls.data;
    };

    return {
        fetchLastCommitStatuses,
        fetchRepoBranchesWithCommitStatuses,
        fetchUser,
        fetchCommitStatuses,
        fetchRepoBranches,
        mergePullRequest,

        fetchRepoBranchesWithCommitStatusesAndPullRequests,

        fetchRepoPullRequestsAssociatedWithCommit,
        getCommitsForRepo,
        getLastCommit,
        getStatusesForRepo,
        /**/
        getBranchesForRepo,
        getRepoForUser,
        getReposForUser,
        getUser,
    };
}
