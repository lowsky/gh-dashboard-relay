import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import UserRepo  from '../../../container/UserRepo';

import { fetchRepoBranches, fetchUser } from '../../../restinpeace/fetchGithubApi';
import lastCommitMock from '../../../restinpeace/lastCommitMock.json';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';

export default function RestfulPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;
    return <RestfulMain userName={userName} repoName={repoName} />;
}

export function RestfulMain({ userName, repoName }) {
    const [repo, storeRepo] = useState({
        owner: userName,
        name: repoName,
        branches: [],
    });
    const [user, storeUser] = useState({ userName });
    const [errorMsg, storeErrorMsg] = useState('');

    useEffect(() => {
        let ignoreDownloadedData = false;

        fetchUser(userName)
            .then((user) => {
                if (!ignoreDownloadedData) {
                    if (user.message) {
                        throw new Error(user.message);
                    }
                    // TODO needs adaption
                    // @ts-ignore
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
                    if (branches.message) {
                        throw new Error(branches.message);
                    }
                    // @ts-ignore
                    storeRepo({
                        owner: { login: userName },
                        name: repoName,
                        branches: branches.map((b) => ({ ...b, lastCommit: lastCommitMock })),
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
                    {
                        // @ts-ignore
                        <UserRepo github={{ user, repo }} />
                    }
                </div>
                {errorMsg && <div className="notification has-text-danger"> {errorMsg} </div>}
            </div>
        </UILibContext.Provider>
    );
}
