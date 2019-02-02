/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';

import UserRepo from '../container/UserRepo';
import fetchGithubApi from './fetchGithubApi';

const lastCommitMock = require('./lastCommitMock.json');

const repoName = 'dashboard';
const repoOwnerLogin = 'lowsky';
const repoPath = 'lowsky/dashboard';

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

export default () => {
    const [repo, storeRepo] = useState(githubData.repo);
    const [user, storeUser] = useState(githubData.user);
    const [errorMsg, storeErrorMsg] = useState(githubData.errorMsg);

    const loadUser = ({ fetchUser }) => {
        fetchUser(repoOwnerLogin)
            .then(user => {
                if (user.message) {
                    throw new Error(user.message);
                }
                storeUser(user);
            })
            .catch(ex => {
                storeErrorMsg('User: ' + ex.message);
                console.log('fetching user info failed', ex);
            });
    };

    const loadRepoBranches = ({ fetchRepoBranches }) => {
        fetchRepoBranches(repoPath)
            .then(branches => {
                if (branches.message) {
                    throw new Error(branches.message);
                }
                storeRepo({
                    owner: { login: repoOwnerLogin },
                    name: repoName,
                    branches: branches.map(b => ({ ...b, lastCommit: lastCommitMock })),
                });
            })
            .catch(ex => {
                storeErrorMsg('Repo: ' + ex.message);
                console.log('fetching branches info failed', ex);
            });
    };

    useEffect(() => loadUser(fetchGithubApi), [repoOwnerLogin]);
    useEffect(() => loadRepoBranches(fetchGithubApi), [repoPath]);

    return (
        <div className="content">
            <div className="box">
                {(user.loading || repo.loading) && (
                    <span className="icon is-large">
                        <i className="fas fa-3x fa-spinner fa-pulse" />
                    </span>
                )}
                <UserRepo github={{ user, repo }} />
            </div>
            {errorMsg && <div className="notification has-text-danger"> {errorMsg} </div>}
        </div>
    );
};
