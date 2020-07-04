/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';

import UserRepo from '../container/UserRepo';

import { fetchRepoBranches, fetchUser, BranchesWithErrorMessage, UserWithErrorMessage } from './fetchGithubApi';

import lastCommitMock from './lastCommitMock.json';
import { UILibPureComponents } from '../components';
import UILibContext from '../components/UILibContext';

const defaultRepoName = 'dashboard';
const defaultOwnerLogin = 'lowsky';

const user: UserWithErrorMessage = {
    avatar_url: "//lorempixel.com/200/200/cats/lorempixel/",
    login: defaultOwnerLogin,
};
let branches: BranchesWithErrorMessage = [];
const githubData = {
    repo: {
        owner: { login: defaultOwnerLogin },
        name: defaultRepoName,
        branches,
        loading: false,
    },
    user,
    errorMsg: '',
};

const RestfulMain = ({ userName = defaultOwnerLogin, repoName = defaultRepoName }) => {
    const [repo, storeRepo] = useState(githubData.repo);
    const [user, storeUser] = useState<UserWithErrorMessage>(githubData.user);
    const [errorMsg, storeErrorMsg] = useState(githubData.errorMsg);

    useEffect(() => {
        let ignoreDownloadedData = false;

        fetchUser(userName)
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

        fetchRepoBranches(userName + '/' + repoName)
            .then(branches => {
                if (!ignoreDownloadedData) {
                    if (branches.message) {
                        throw new Error(branches.message);
                    }
                    // @ts-ignore
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
        // @ts-ignore
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
