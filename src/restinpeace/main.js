/* eslint-disable no-console */

import fetchGithubApi from './fetchGithubApi';
import React from 'react';
import ReactDOM from 'react-dom';

import BranchesTable from '../components/BranchesTable';
import User from '../components/User';

const repo = 'lowsky/dashboard';

let content = document.getElementById('content');

const githubData = {
    repo: {
        branches: []
    },
    user: {
        avatar_url: '',
        login: 'lowsky'
    }
};

let renderOrUpdateBranches = () => {

    ReactDOM.render((
        <div className="panel-default">
                <div className="panel-body">
                    <User user={githubData.user} />
                    <BranchesTable repo={githubData.repo} />
                </div>
        </div>),
        content);
};

// init
renderOrUpdateBranches();

// fetch per github REST api
const { fetchRepoBranches, fetchUser } = fetchGithubApi;

fetchUser('lowsky')
    .then(user => {
        githubData.user = user;
        console.log('fetched user data:', user);
        renderOrUpdateBranches();
    })
    .catch(function (ex) {
        console.log('fetching user info failed', ex);
        alert(`Error, while trying to retrieve data for user.`); // eslint-disable-line quotes
    });

fetchRepoBranches(repo)
    .then(branches => {
        githubData.repo = {
            branches
        };
        renderOrUpdateBranches();
    })
    .catch(function (ex) {
        console.log('fetching branches info failed', ex);
        alert(`Error, while trying to retrieve data for branches of repo.`); // eslint-disable-line quotes
    });
