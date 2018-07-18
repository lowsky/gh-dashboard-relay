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
        avatar_url: 'http://lorempixel.com/200/200/cats/lorempixel/',
        login: 'lowsky',
    },
    errorMsg: '',
};

export default class RestMain extends Component {
    constructor() {
        super();
        this.state = {
            ...githubData, // clone
        };
    }

    componentDidMount() {
        const { fetchRepoBranches, fetchUser } = fetchGithubApi;

        githubData.errorMsg = ''; // reset

        fetchUser(repoOwnerLogin)
            .then(user => {
                if (user.message) {
                    throw new Error(user.message);
                }
                githubData.user = user;
                this.setState(githubData);
            })
            .catch(ex => {
                githubData.errorMsg = ex.message;
                this.setState(githubData);
                console.log('fetching user info failed', ex);
            });

        fetchRepoBranches(repo)
            .then(branches => {
                if (branches.message) {
                    throw new Error(branches.message);
                }
                githubData.repo = {
                    branches,
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
                githubData.errorMsg = ex.message;
                this.setState(githubData);
                console.log('fetching branches info failed', ex);
            });
    }

    render() {
        return (
            <div className="panel-default">
                <div className="panel-body">
                    <UserRepo github={this.state} />
                </div>
                {this.state.errorMsg && <p> {this.state.errorMsg}</p>}
            </div>
        );
    }
}
