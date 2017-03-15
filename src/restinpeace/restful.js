/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';

import UserRepo from '../container/UserRepo';
import fetchGithubApi from './fetchGithubApi';

const lastCommitMock = require('./lastCommitMock.json');

const repo = 'lowsky/dashboard';

let content = document.getElementById('restful-content');

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
    if (content) {
        ReactDOM.render((
                <div className="panel-default">
                    <div className="panel-body">
                        <UserRepo github={githubData}/>
                    </div>
                </div>),
            content);
    }
};

// init
renderOrUpdateBranches();

// hot-module-reloading
if (module.hot) {
    module.hot.accept('../container/UserRepo', () => {
        renderOrUpdateBranches();
    });
}

// fetch per github REST api
const { fetchRepoBranches, fetchUser } = fetchGithubApi;

fetchUser('lowsky')
    .then(user => {
        githubData.user = user;
        console.log('fetched user data:', user);
        renderOrUpdateBranches();
    })
    .catch(ex => {
        console.log('fetching user info failed', ex);
        alert(`Error, while loading user info for user ($user) from github`); // eslint-disable-line quotes
    });

fetchRepoBranches(repo)
    .then(branches => {
        githubData.repo = {
            branches
        };
        renderOrUpdateBranches();
        return branches;
    })
    .then(branches => {
        githubData.repo = {
            branches: branches.map(branch => { branch.lastCommit = lastCommitMock; return branch; })
        };
        renderOrUpdateBranches();
    })
    .catch(ex => {
        console.log('fetching branches info failed', ex);
        alert(`Error, while loading branches info for repo ($repo) from github`); // eslint-disable-line quotes
    });

