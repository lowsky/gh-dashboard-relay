/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';

import UserRepo from '../container/UserRepo';
import github from './fetchGithubApi';

import lastCommitMock from './lastCommitMock.json';
import { UILibContext, UILibPureComponents } from '../components';

const defaultRepoName = 'dashboard';
const defaultOwnerLogin = 'lowsky';

const githubData = {
    repo: {
        owner: { login: defaultOwnerLogin },
        name: defaultRepoName,
        branches: [],
    },
    user: {
        avatar_url: '//lorempixel.com/200/200/cats/lorempixel/',
        login: defaultOwnerLogin,
    },
    errorMsg: '',
};

// eslint-disable-next-line react/prop-types
const RestfulMain = ({ userName = defaultOwnerLogin, repoName = defaultRepoName }) => {
    const [repo, storeRepo] = useState(githubData.repo);
    const [user, storeUser] = useState(githubData.user);
    const [errorMsg, storeErrorMsg] = useState(githubData.errorMsg);

    useEffect(() => {
        let ignoreDownloadedData = false;

        github
            .fetchUser(userName)
            .then(user => {
                if (!ignoreDownloadedData) {
                    if (user.message) {
                        throw new Error(user.message);
                    }
                    storeUser(user);
                }
            })
            .catch(ex => {
                if (!ignoreDownloadedData) {
                    storeErrorMsg('User: ' + ex.message);
                    console.log('fetching user info failed', ex);
                }
            });
        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName]);

    useEffect(() => {
        let ignoreDownloadedData = false;

        github
            .fetchRepoBranches(userName + '/' + repoName)
            .then(branches => {
                if (!ignoreDownloadedData) {
                    if (branches.message) {
                        throw new Error(branches.message);
                    }
                    storeRepo({
                        owner: { login: userName },
                        name: repoName,
                        branches: branches.map(b => ({ ...b, lastCommit: lastCommitMock })),
                    });
                }
            })
            .catch(ex => {
                if (!ignoreDownloadedData) {
                    storeErrorMsg('Repo: ' + ex.message);
                    console.log('fetching branches info failed', ex);
                }
            });

        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName, repoName]);

    return (
        <UILibContext.Provider value={UILibPureComponents}>
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
        </UILibContext.Provider>
    );
};
export default RestfulMain;
