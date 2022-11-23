import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import UserRepo from '../../../container/UserRepo';

import { Branches, fetchUser, User } from '../../../restinpeace/fetchGithubApi';
import { Alert, AlertIcon } from '@chakra-ui/react';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import { WarningMissingURLParams } from '../../../container/NavBarWithRouting';
import InternalLink from "../../../components/InternalLink";

import { fetchRepoBranchesWithCommitStatusAndPR } from '../../../restinpeace/UserRepo';

export default function RestfulPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;
    if (userName && repoName) {
        if (typeof window === 'undefined') {
            return <h1>Server generated placeholder ... - please enable javascript to load the page.</h1>;
        }
        return (
            <>
                <InternalLink href={'/restful'}>
                    back to shortcut list
                </InternalLink>

                <UILibContext.Provider value={UILibPureComponents}>
                    <RestfulMain userName={userName} repoName={repoName} />
                </UILibContext.Provider>
            </>
        );
    }
    return <WarningMissingURLParams />;
}

export function RestfulMain({ userName, repoName }) {
    const [repo, storeRepo] = useState({
        name: repoName,
        owner: { login: userName },
        branches: [] as Branches,
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
                }
            });
        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName]);

    useEffect(() => {
        let ignoreDownloadedData = false;

        fetchRepoBranchesWithCommitStatusAndPR({ userName, repoName })
            .then((branchesWithCommit) => {
                if (!ignoreDownloadedData)
                    storeRepo({
                        name: repoName,
                        owner: { login: userName },
                        branches: branchesWithCommit.branches,
                    });
            })
            .catch((ex) => {
                if (!ignoreDownloadedData) {
                    storeErrorMsg('Repo: Branches: ' + ex.message);
                }
            });

        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName, repoName]);

    return (
        <>
            <UserRepo user={user} repo={repo} repoName={repoName} userName={userName} />

            {errorMsg && (
                <Alert status="error">
                    <AlertIcon />
                    {errorMsg}
                </Alert>
            )}
        </>
    );
}
