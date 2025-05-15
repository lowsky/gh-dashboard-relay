import { GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from '@octokit/rest';

import type { GithubBranch, GithubCommit, GithubRepo, GithubUser } from 'lib/types/resolvers';
import { GithubStatus } from '../components/CommitWithStatuses/githubStatus';

interface User {
    login: string;
    company?: string | null;
    avatar_url: string;
}

type Branch = {
    commit: Commit;
    name: string;
};

type Branches = Branch[];

interface Commit {
    sha: string;
    url: string;
}

type RestGithubCommitsListItemDataType = GetResponseTypeFromEndpointMethod<Octokit['repos']['listCommits']>['data'];

type ListPullRequestsAssociatedWithCommitResponseType = GetResponseTypeFromEndpointMethod<
    Octokit['repos']['listPullRequestsAssociatedWithCommit']
>;

type ListPullRequestsAssociatedWithCommitResponseDataType = ListPullRequestsAssociatedWithCommitResponseType['data'];

export type MergePullRequestsResponseDataType = GetResponseDataTypeFromEndpointMethod<Octokit['pulls']['merge']>;

export interface AuthorizedGitHub {
    fetchCommitStatuses: {
        (commit: { ownerUsername: string; reponame: string; sha: string }): Promise<GithubStatus[]>;
    };
    fetchLastCommitStatuses: (commit: {
        sha?: string | null | undefined;
        ownerUsername: string;
        reponame: string;
    }) => Promise<GithubStatus[] | never[]>;
    fetchRepoBranches: (owner: string, repo: string) => Promise<Branches>;
    getReposForUser: (username: string) => Promise<GithubRepo[]>;
    fetchRepoBranchesWithCommitStatuses: ({ userName, repoName }: { userName: string; repoName: string }) => Promise<{
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
    }>;
    fetchRepoBranchesWithCommitStatusesAndPullRequests: ({
        userName,
        repoName,
    }: {
        userName: string;
        repoName: string;
    }) => Promise<{
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
    }>;
    fetchRepoPullRequestsAssociatedWithCommit: (
        owner: string,
        repo: string,
        commit_sha: string
    ) => Promise<ListPullRequestsAssociatedWithCommitResponseDataType>;
    fetchUser: (username: string) => Promise<User>;
    getBranchesForRepo: (username: string, reponame: string) => Promise<GithubBranch[]>;
    getCommitsForRepo: (username: string, reponame: string, sha?: string) => Promise<GithubCommit[]>;
    getLastCommit: (
        ownerUsername: string,
        reponame: string,
        sha: string
    ) => Promise<
        GithubCommit & {
            date?: string;
            message: string;
            ownerUsername: string;
            reponame: string;
        }
    >;
    getRepoForUser: (username: string, reponame: string) => Promise<GithubRepo>;
    getStatusesForRepo: (owner: string, repo: string, sha: string) => Promise<GithubStatus[]>;
    getUser: (username: string) => Promise<GithubUser>;
    mergePullRequest: ({
        merge_method,
        owner,
        pull_number,
        repo,
        sha,
    }: {
        merge_method?: undefined | 'merge' | 'rebase';
        owner: string;
        pull_number: number;
        repo: string;
        sha?: undefined | string;
    }) => Promise<MergePullRequestsResponseDataType>;
}

export function getAuthorizedGitHub(octo: Octokit): AuthorizedGitHub {
    const getCommitsForRepo = async (
        username: string,
        reponame: string,
        sha?: string
    ): Promise<RestGithubCommitsListItemDataType> => {
        const commits = await octo.repos.listCommits({
            sha,
            owner: username,
            repo: reponame,
        });
        return commits.data;
    };

    const getStatusesForRepo = async (owner: string, repo: string, sha: string): Promise<Array<GithubStatus>> => {
        const statuses = await octo.repos.listCommitStatusesForRef({
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
    }) => Promise<MergePullRequestsResponseDataType> = async ({
        owner,
        repo,
        pull_number,
        sha,
        merge_method = 'rebase',
    }): Promise<MergePullRequestsResponseDataType> => {
        const response = await octo.pulls.merge({
            owner,
            repo,
            merge_method,
            sha,
            pull_number,
        });
        return response.data;
    };

    async function getLastCommit(
        ownerUsername: string,
        reponame: string,
        sha: string
    ): Promise<
        GithubCommit & {
            message: string;
            date?: string;
            ownerUsername: string;
            reponame: string;
        }
    > {
        const commits = await getCommitsForRepo(ownerUsername, reponame, sha);
        const commit = commits[0];

        const message = commit.commit.message;
        const date = commit.commit.committer?.date;
        return {
            ...commit,
            message,
            date,
            ownerUsername,
            reponame,
        };
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
        return branches.data;
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
                date?: string;
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

        const branchesWithCommitProms = branches?.reverse().map(async (branch) => {
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
        const pulls = await octo.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha });
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
        /*
         * for relay support only
         */
        getBranchesForRepo: async (username, reponame): Promise<Array<GithubBranch>> => {
            const branches = await octo.repos.listBranches({
                owner: username,
                repo: reponame,
            });
            return branches.data;
        },
        getRepoForUser: async (username, reponame): Promise<GithubRepo> => {
            const { data } = await octo.repos.get({ repo: reponame, owner: username });
            return { ...convertItsIdToString(data), owner: convertItsIdToString(data.owner) };
        },
        getUser: async (username: string): Promise<GithubUser> => {
            try {
                const { data } = await octo.users.getByUsername({ username });
                return convertItsIdToString(data);
            } catch (err) {
                console.error('getUser failed', username, err);
            }
            return {};
        },
        getReposForUser: async (username: string): Promise<Array<GithubRepo>> => {
            const repos = await octo.repos.listForUser({ username });
            return repos.data.map((r) => ({
                ...convertItsIdToString(r),
                owner: convertItsIdToString(r.owner),
            }));
        },
    };
}

function convertItsIdToString<T>(obj: any & { id: number }): T & { id: string } {
    return {
        ...obj,
        id: String(obj.id),
    };
}
