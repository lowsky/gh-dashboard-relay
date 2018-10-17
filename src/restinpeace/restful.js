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
        avatar_url: '//lorempixel.com/200/200/cats/lorempixel/',
        login: 'lowsky',
    },
    errorMsg: '',
};

export default class RestMain extends Component {
    state = {
        loading: true,
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
                        loading: false,
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
        const { errorMsg, loading } = this.state;
        return (
            <div className="content">
                <div className="box">
                    {loading && (
                        <span className="icon is-large">
                            <i className="fas fa-3x fa-spinner fa-pulse" />
                        </span>
                    )}
                    <UserRepo github={this.state} />
                </div>
                {errorMsg && <div className="notification has-text-danger"> {errorMsg} </div>}
            </div>
        );
    }
}
