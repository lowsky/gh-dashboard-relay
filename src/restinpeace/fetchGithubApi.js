/* eslint-disable no-console */

/**
 * Fetch the branches info for given repo directly per 'REST' from GitHub.
 *
 * LATER: promisify!
 * @param repo <userName>/<repoName>, like lowsky/dashboard
 * @param renderOrUpdateBranches callback, gets the array of fetched branches
 */
let requestAndUpdateBranches = (repo, renderOrUpdateBranches) => {
    let url = `https://api.github.com/repos/${repo}/branches`; // eslint-disable-line quotes
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);

            console.log('Github response: ', request.responseText);

            let branchNames = data.map(function (branch) {
                return branch.name;
            });
            console.log(branchNames.join(' / '));

            renderOrUpdateBranches(branchNames);

        } else {
            alert(`Load error, while trying to retrieve data from $url - respond status: `, request.status); // eslint-disable-line quotes
        }
    };

    request.onerror = () => {
        console.error('Error occured', request);
        alert(`Load error, while trying to retrieve data from $url`); // eslint-disable-line quotes
    };

    request.send();
};

const fetchGithubApi = {
    requestAndUpdateBranches
};

export default fetchGithubApi;
