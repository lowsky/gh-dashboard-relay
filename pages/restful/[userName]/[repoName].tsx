import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import UserRepo from '../../../container/UserRepo';

import { fetchRepoBranches, fetchUser, BranchesWithErrorMessage, UserWithErrorMessage } from '../../../restinpeace/fetchGithubApi';
import lastCommitMock from '../../../restinpeace/lastCommitMock.json';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { Spinner } from "../../../components/Spinner";


const defaultRepoName = 'dashboard';
const defaultOwnerLogin = 'lowsky';

const user: UserWithErrorMessage =
    {
        avatar_url: '//lorempixel.com/200/200/cats/lorempixel/',
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

export default function RestfulPage() {
    const router = useRouter();
    const { userName = defaultOwnerLogin, repoName = defaultRepoName } = router.query;

    // @ts-ignore
    return RestfulMain({ userName, repoName });
}

export function RestfulMain({ userName = defaultOwnerLogin, repoName = defaultRepoName }) {
    const [repo, storeRepo] = useState(githubData.repo);
    const [user, storeUser] = useState<UserWithErrorMessage>(githubData.user);
    const [errorMsg, storeErrorMsg] = useState(githubData.errorMsg);

    useEffect(() => {
        let ignoreDownloadedData = false;

        // @ts-ignore
        fetchUser(userName)
            .then((user) => {
                if (!ignoreDownloadedData) {
                    if (user.message) {
                        throw new Error(user.message);
                    }
                    storeUser(user);
                }
            })
            .catch((ex) => {
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
            .then((branches) => {
                if (!ignoreDownloadedData) {
                    if (branches.message) {
                        throw new Error(branches.message);
                    }
                    // @ts-ignore
                    storeRepo({
                        // @ts-ignore
                        owner: { login: userName },
                        // @ts-ignore
                        name: repoName,
                        branches: branches.map((b) => ({ ...b, lastCommit: lastCommitMock })),
                    });
                }
            })
            .catch((ex) => {
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
                    {(user.loading || repo.loading) && <Spinner />}
                    {<UserRepo github={{ user, repo }} />}
                </div>
                {errorMsg && <div className="notification has-text-danger"> {errorMsg} </div>}
            </div>
        </UILibContext.Provider>
    );
};


