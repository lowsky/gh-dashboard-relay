/* eslint-disable no-console */

import 'whatwg-fetch';

/**
 * Fetch the branches info for given repo directly per 'REST' from GitHub.
 *
 * @param repo <userName>/<repoName>, like lowsky/dashboard
 */
let fetchRepoBranches = async repo => {
    let url = `https://api.github.com/repos/${repo}/branches`; // eslint-disable-line quotes
    let response = await fetch(url);
    return await response.json();
};

/**
 * Fetch the user info for a given login directly per 'REST' from GitHub.
 *
 * @param login user's login name, e.g lowsky
 */
let fetchUser = async login => {
    let url = `https://api.github.com/users/${login}`; // eslint-disable-line quotes
    let response = await fetch(url);
    return await response.json();
};

export default {
    fetchUser,
    fetchRepoBranches,
};
