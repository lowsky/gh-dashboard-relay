/* eslint-disable no-console */

import React, { Component } from 'react';

import UserRepo from '../container/UserRepo';
import fetchGithubApi from './fetchGithubApi';

const lastCommitMock = require('./lastCommitMock.json');

const repoName = 'dashboard';
const repoOwnerLogin = 'lowsky';
const repo = 'lowsky/dashboard';

const githubData = {
    repo: {
        owner: { login: repoOwnerLogin },
        name: repoName,
        branches: [],
    },
    user: {
        avatar_url: '',
        login: 'lowsky',
    },
};

export default class RestMain extends Component {
    constructor(props) {
        super(props);
        this.state = githubData;
    }

    componentDidMount() {
        const { fetchRepoBranches, fetchUser } = fetchGithubApi;
        fetchUser('lowsky')
            .then(user => {
                githubData.user = user;
                this.setState(githubData);
            })
            .catch(ex => {
                console.log('fetching user info failed', ex);
                // alert(`Error, while loading user info for user ($user) from github`); // eslint-disable-line quotes
            });

        fetchRepoBranches(repo)
            .then(branches => {
                githubData.repo = {
                    branches,
                    owner: { login: repoOwnerLogin },
                    name: repoName,
                };
                this.setState(githubData);
                return branches;
            })
            .then(branches => {
                githubData.repo = {
                    ...githubData.repo,
                    branches: branches.map(branch => {
                        branch.lastCommit = lastCommitMock;
                        return branch;
                    }),
                };
                this.setState(githubData);
            })
            .catch(ex => {
                console.log('fetching branches info failed', ex);
                // alert(`Error, while loading branches info for repo ($repo) from github`); // eslint-disable-line quotes
            });
    }

    render() {
        return (
            <div className="panel-default">
                <div className="panel-body">
                    <UserRepo github={this.state} />
                </div>
            </div>
        );
    }
}
