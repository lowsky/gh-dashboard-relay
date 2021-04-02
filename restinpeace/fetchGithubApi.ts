import 'whatwg-fetch';

import { GithubBranch } from '../lib/types/resolvers';

export interface Commit {
    sha: string;
    url: string;
}

export type Branches = GithubBranch[];

export interface BranchesWithErrorMessage extends Branches {
    loading?: Boolean;
    message?: string;
}
/**
 * Fetch the branches info for given repo directly per 'REST' from GitHub.
 *
 * @param repo <userName>/<repoName>, like lowsky/dashboard
 */
export const fetchRepoBranches = async (repo: String): Promise<BranchesWithErrorMessage> => {
    let url = `https://api.github.com/repos/${repo}/branches`; // eslint-disable-line quotes
    let response = await fetch(url);
    return response.json();
};

interface User {
    login: string;
    avatar_url: string;
}

export interface UserWithErrorMessage extends User {
    loading?: Boolean;
    message?: string;
}

/**
 * Fetch the user info for a given login directly per 'REST' from GitHub.
 *
 * @param login user's login name, e.g lowsky
 */
export const fetchUser = async (login: String): Promise<UserWithErrorMessage> => {
    let url = `https://api.github.com/users/${login}`; // eslint-disable-line quotes
    let response = await fetch(url);
    return response.json();
};
