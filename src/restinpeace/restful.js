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
        return branches;
    })
    .then(branches => {
        githubData.repo = {
            branches: branches.map(branch => enrich(branch))
        };
        renderOrUpdateBranches();
    })
    .catch((ex) => {
        console.log('fetching branches info failed', ex);
        // alert(`Error, while trying to retrieve data for branches of repo.`); // eslint-disable-line quotes
    });

let enrich = (branch) => {
    branch.lastCommit = {
        date: '',
        'sha': 'bfae86ac1dc8d3b0ae594e2c3a23311dd503d15e',
        'message': 'Merge pull request #287 from lowsky/greenkeeper/jsdom-pin-9.11.0\n\nchore: pin jsdom to 9.11.0',
        'status': [
            {
                'state': 'success',
                'description': 'Your tests passed on CircleCI!',
                'target_url': 'https://circleci.com/gh/lowsky/dashboard/763?utm_campaign=vcs-integration-link&utm_medium=referral&utm_source=github-build-link',
                'context': 'ci/circleci',
                'updated_at': '2017-03-14T18:59:30Z'
            },
            {
                'state': 'success',
                'description': 'No failing dependencies.',
                'target_url': 'https://www.bithound.io/github/lowsky/dashboard/bfae86ac1dc8d3b0ae594e2c3a23311dd503d15e/dependencies/npm?status=passing',
                'context': 'bitHound - Dependencies',
                'updated_at': '2017-03-14T18:55:43Z'
            },
            {
                'state': 'success',
                'description': 'No failing files.',
                'target_url': 'https://www.bithound.io/github/lowsky/dashboard/bfae86ac1dc8d3b0ae594e2c3a23311dd503d15e/files?status=passing',
                'context': 'bitHound - Code',
                'updated_at': '2017-03-14T18:55:43Z'
            },
            {
                'state': 'pending',
                'description': null,
                'target_url': 'https://www.bithound.io/github/lowsky/dashboard/master',
                'context': 'bitHound - Dependencies',
                'updated_at': '2017-03-14T18:54:57Z'
            },
            {
                'state': 'pending',
                'description': null,
                'target_url': 'https://www.bithound.io/github/lowsky/dashboard/master',
                'context': 'bitHound - Code',
                'updated_at': '2017-03-14T18:54:57Z'
            },
            {
                'state': 'success',
                'description': 'GitHub Pages successfully built your site.',
                'target_url': null,
                'context': 'github/pages',
                'updated_at': '2017-03-14T18:54:50Z'
            }
        ],
        'author': {
            'login': 'lowsky',
            'avatar_url': 'https://avatars2.githubusercontent.com/u/217931?v=3'
        }
    };
    return branch;
};
