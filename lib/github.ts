import { Octokit } from '@octokit/rest';

import { GithubBranch, GithubRepo, GithubUser } from './types/resolvers';

const NEXT_PUBLIC_GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const octo = new Octokit({
    auth: NEXT_PUBLIC_GITHUB_TOKEN,
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
