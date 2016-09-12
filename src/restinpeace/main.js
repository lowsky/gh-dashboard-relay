/* eslint-disable no-console */

import { requestAndUpdateBranches } from './fetchGithubApi';
import React from 'react';
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

renderOrUpdateBranches([]);

requestAndUpdateBranches(repo, renderOrUpdateBranches);
