import { Octokit } from '@octokit/rest';
import {
    GetResponseTypeFromEndpointMethod,
    GetResponseDataTypeFromEndpointMethod,
} from "@octokit/types";

import { GithubRepo, GithubStatus, GithubBranch, GithubUser, GithubCommit } from './types/resolvers';

// @ts-ignore
const { GITHUB_TOKEN } = process.env;

export const octo = new Octokit({
    auth: GITHUB_TOKEN,
});

export const getUser = async (username): Promise<GithubUser> => {
    const { data } = await octo.users.getByUsername({ username });
    return convertItsIdToString(data);
};

export const getReposForUser = async (username): Promise<Array<GithubRepo>> => {
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

function convertItsIdToString(obj: any & { id: number }): any & { id: String } {
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

