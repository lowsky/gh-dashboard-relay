/* eslint-disable no-console */
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import BranchesTable from '../components/BranchesTable';

const repo = 'lowsky/dashboard';

let content = document.getElementById('content');

let renderOrUpdateBranches = (branches) => {
    ReactDOM.render((
        <div className="panel-default">
                <div className="panel-body">
                    <BranchesTable branches={ branches } />
                </div>
        </div>),
        content);
};


let requestAndShowBranches = () => {
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
    return request;
};

renderOrUpdateBranches([]);

requestAndShowBranches().send();
