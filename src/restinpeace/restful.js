/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';

import UserRepo from '../container/UserRepo';
import fetchGithubApi from './fetchGithubApi';

const lastCommitMock = require('./lastCommitMock.json');

const repoName = 'dashboard';
const repoOwnerLogin = 'lowsky';
const repo = 'lowsky/dashboard';

let content = document.getElementById('restful-content');

const githubData = {
    repo: {
        owner: {login: repoOwnerLogin},
        name: repoName,
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

export default function RestMain () {
    return (<div className="panel-default">
        <div className="panel-body">
            REST Main
            <UserRepo github={githubData}/>
        </div>
    </div>);
}
// init

// hot-module-reloading
if (module.hot) {
    module.hot.accept('../container/UserRepo', () => {
    });
}

// fetch per github REST api
const { fetchRepoBranches, fetchUser } = fetchGithubApi;

fetchUser('lowsky')
    .then(user => {
        githubData.user = user;
        console.debug('fetched user data:', user);
        renderOrUpdateBranches();
    })
    .catch(ex => {
        console.log('fetching user info failed', ex);
        alert(`Error, while loading user info for user ($user) from github`); // eslint-disable-line quotes
    });
if (false) {

fetchRepoBranches(repo)
    .then(branches => {
        githubData.repo = {
            branches,
            owner: { login: repoOwnerLogin },
            name: repoName
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

}
