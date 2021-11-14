/* eslint-disable no-undef */

import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod, GetResponseTypeFromEndpointMethod } from '@octokit/types';

import { GithubBranch, GithubCommit, GithubRepo, GithubStatus, GithubUser } from './types/resolvers';

// @ts-ignore
const { GITHUB_TOKEN } = process.env;

export const octo = new Octokit({
    auth: GITHUB_TOKEN,
});

export const getUser = async (username:string): Promise<GithubUser> => {
    try {
        const { data } = await octo.users.getByUsername({ username });
        return convertItsIdToString(data);
    } catch (err) {
        console.log('get User ', username, err);
    }
    return {};
};

export const getReposForUser = async (username:string): Promise<Array<GithubRepo>> => {
    const repos = await octo.repos.listForUser({ username });
    return repos.data.map((r) => ({
        ...convertItsIdToString(r),
        owner: convertItsIdToString(r.owner),
    }));
};

export const getCommitsForRepo = async (
    username: string,
    reponame: string,
    sha?: string
): Promise<Array<GithubCommit>> => {
    const commits = await octo.repos.listCommits({ sha, owner: username, repo: reponame });
    return convertItsIdToString(commits.data);
};

export const getBranchesForRepo = async (username, reponame): Promise<Array<GithubBranch>> => {
    const branches = await octo.repos.listBranches({
        owner: username,
        repo: reponame,
    });
    return branches.data;
};

export const getRepoForUser = async (username, reponame): Promise<GithubRepo> => {
    const { data } = await octo.repos.get({ repo: reponame, owner: username });
    return { ...convertItsIdToString(data), owner: convertItsIdToString(data.owner) };
};

export const getStatusesForRepo = async (username, reponame, sha): Promise<Array<GithubStatus>> => {
    const statuses = await octo.repos.listCommitStatusesForRef({
        ref: sha,
        repo: reponame,
        owner: username,
    });

    return statuses.data;
};

export function convertItsIdToString<T>(obj: any & { id: number }): T & { id: String } {
    return {
        ...obj,
        id: String(obj.id),
    };
}
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
export const fetchRepoPullRequestsAssociatedWithCommit = async (owner: string, repo: string, commit_sha: string): Promise<ListPullRequestsAssociatedWithCommitResponseDataType> => {
    const pulls: ListPullRequestsAssociatedWithCommitResponseType = await octo.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha });
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
}) : Promise<MergePullRequestsResponseDataType> => {

    const result = octo.pulls.merge({
        owner,
        repo,
        merge_method,
        sha,
        pull_number,
    });
    // @ts-ignore
    return result;
};

export function getLastCommit(ownerUsername: string, reponame: string, sha) {
    return getCommitsForRepo(ownerUsername, reponame, sha) //
        .then((commits) => commits[0])
        .then((commit) => {
            // @ts-ignore
            const message = commit.commit.message;
            // @ts-ignore
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