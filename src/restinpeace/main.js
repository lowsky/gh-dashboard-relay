/* eslint-disable no-console */

import fetchGithubApi from './fetchGithubApi';
import React from 'react';
import ReactDOM from 'react-dom';

import BranchesTable from '../components/BranchesTable';

const repo = 'lowsky/dashboard';

let content = document.getElementById('content');

let renderOrUpdateBranches = (branches) => {
    const repoData = {
        branches
    };

    ReactDOM.render((
        <div className="panel-default">
                <div className="panel-body">
                    <BranchesTable repo={repoData} />
                </div>
        </div>),
        content);
};

// init
renderOrUpdateBranches([]);

// fetch per github REST api
const { requestAndUpdateBranches } = fetchGithubApi;
requestAndUpdateBranches(repo, renderOrUpdateBranches);
