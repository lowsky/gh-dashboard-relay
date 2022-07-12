import { GithubBranch } from '../lib/types/resolvers';
import { octo } from '../lib/github';

export interface Commit {
    sha: string;
    url: string;
}

export type Branches = GithubBranch[];

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
