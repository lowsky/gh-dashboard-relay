/* eslint-disable no-console */

import fetchGithubApi from './fetchGithubApi';
import React from 'react';
import ReactDOM from 'react-dom';

import UserRepo from '../container/UserRepo';

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
        // alert(`Error, while trying to retrieve data for branches of repo.`); // eslint-disable-line quotes
    });
