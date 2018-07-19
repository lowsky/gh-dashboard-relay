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
    state = {
        ...githubData, // clone
    };

    componentDidMount() {
        const { fetchRepoBranches, fetchUser } = fetchGithubApi;

        this.setState(() => githubData);

        fetchUser(repoOwnerLogin)
            .then(user => {
                if (user.message) {
                    throw new Error(user.message);
                }
                this.setState(state => {
                    return {
                        ...state,
                        user: user,
                    };
                });
            })
            .catch(ex => {
                this.setState(state => {
                    return {
                        ...state,
                        errorMsg: ex.message,
                    };
                });
                console.log('fetching user info failed', ex);
            });

        fetchRepoBranches(repo)
            .then(branches => {
                if (branches.message) {
                    throw new Error(branches.message);
                }
                this.setState(state => {
                    return {
                        ...state,
                        repo: {
                            ...state.repo,
                            branches,
                        },
                    };
                });

                return branches;
            })
            .then(branches => {
                this.setState(state => {
                    return {
                        ...state,
                        repo: {
                            ...state.repo,
                            branches: branches.map(branch => {
                                branch.lastCommit = lastCommitMock;
                                return branch;
                            }),
                        },
                    };
                });
            })
            .catch(ex => {
                this.setState(state => {
                    return {
                        ...state,
                        errorMsg: ex.message,
                    };
                });
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
