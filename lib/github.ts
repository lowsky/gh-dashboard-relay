import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

import { GithubBranch, GithubRepo, GithubUser } from './types/resolvers';

// @ts-ignore
const { GITHUB_TOKEN } = process.env;

export const octo = new Octokit({
    auth: GITHUB_TOKEN,
});

export const getUser = async (username: string): Promise<GithubUser> => {
    try {
        const { data } = await octo.users.getByUsername({ username });
        return convertItsIdToString(data);
    } catch (err) {
        console.log('get User ', username, err);
    }
    return {};
};

export const getReposForUser = async (username: string): Promise<Array<GithubRepo>> => {
    const repos = await octo.repos.listForUser({ username });
    return repos.data.map((r) => ({
        ...convertItsIdToString(r),
        owner: convertItsIdToString(r.owner),
    }));
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

export function convertItsIdToString<T>(obj: any & { id: number }): T & { id: String } {
    return {
        ...obj,
        id: String(obj.id),
    };
}

export type ListPullRequestsAssociatedWithCommitResponseDataType = GetResponseDataTypeFromEndpointMethod<
    typeof octo.repos.listPullRequestsAssociatedWithCommit
>;

export type MergePullRequestsResponseDataType = GetResponseDataTypeFromEndpointMethod<typeof octo.pulls.merge>;

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
