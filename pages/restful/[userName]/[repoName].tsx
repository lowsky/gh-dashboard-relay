import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import UserRepo from '../../../container/UserRepo';

import { fetchRepoBranches, fetchUser, User } from '../../../restinpeace/fetchGithubApi';
import lastCommitMock from '../../../restinpeace/lastCommitMock.json';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';

export default function RestfulPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;
    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return <RestfulMain userName={userName} repoName={repoName} />;
    }
    return <WarningMissingURLParams />;
};


export function RestfulMain({ userName, repoName }) {
    const [repo, storeRepo] = useState({
        name: repoName,
        owner: { login: userName },
        branches: [],
    });
    const [user, storeUser] = useState<User>({
        login: userName,
        avatar_url: '',
    });
    const [errorMsg, storeErrorMsg] = useState('');

    useEffect(() => {
        let ignoreDownloadedData = false;

        fetchUser(userName)
            .then((user) => {
                if (!ignoreDownloadedData) {
                    storeUser(user);
                }
            })
            .catch((ex) => {
                if (!ignoreDownloadedData) {
                    storeErrorMsg('User: ' + ex.message);
                    console.error('fetching user info failed', ex);
                }
            });
        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName]);

    useEffect(() => {
        let ignoreDownloadedData = false;

        fetchRepoBranches(userName, repoName)
            .then((branches) => {
                if (!ignoreDownloadedData) {
                    storeRepo({
                        name: repoName,
                        owner: { login: userName },
                        // @ts-ignore needs to be fixed / investigated
                        branches: branches.map((b) => ({ ...b, lastCommit: lastCommitMock })) ?? [],
                    });
                }
            })
            .catch((ex) => {
                if (!ignoreDownloadedData) {
                    storeErrorMsg('Repo: Branches: ' + ex.message);
                    console.error('fetching branches info failed', ex);
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
                    <UserRepo user={user} repo={repo} />
                </div>
                {errorMsg && <div className="notification has-text-danger"> {errorMsg} </div>}
            </div>
        </UILibContext.Provider>
    );
}
