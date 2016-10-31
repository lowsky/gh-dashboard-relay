/* eslint-disable no-console */

import 'whatwg-fetch';

/**
 * Fetch the branches info for given repo directly per 'REST' from GitHub.
 *
 * @param repo <userName>/<repoName>, like lowsky/dashboard
 */
let fetchRepoBranches = (repo) => {

    let url = `https://api.github.com/repos/${repo}/branches`; // eslint-disable-line quotes
    return fetch(url).then(function (response) {
        // console.warn('reponse', url, response.json());
        return response.json();
    });
};


let fetchUser = (login) => {
    let url = `https://api.github.com/users/${login}`; // eslint-disable-line quotes
    return fetch(url).then(function (response) {
        return response.json();
    });
};

const fetchGithubApi = {
    fetchUser,
    fetchRepoBranches
};

export default fetchGithubApi;
