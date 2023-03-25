'use client'; // this directive should be at top of the file, before any imports.

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Alert, AlertIcon } from '@chakra-ui/react';

import { UILibPureComponents } from '../../../components';
import UILibContext from '../../../components/UILibContext';
import InternalLink from '../../../components/InternalLink';

import UserRepo from '../../../container/UserRepo';
import {
    Branches,
    DoMergePR,
    fetchRepoBranchesWithCommitStatusesAndPullRequests,
    fetchUser,
    User,
} from '../../../restinpeace/github';
import { mergePullRequest } from '../../../lib/github';

export default function RestfulPage() {
    const router = useRouter();
    const { userName, repoName } = router.query;

    return (
        <>
            <InternalLink href={'/restful'}>back to repos</InternalLink>

            <UILibContext.Provider value={UILibPureComponents}>
                <RestfulMain userName={userName} repoName={repoName} />
            </UILibContext.Provider>
        </>
    );
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

        fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName })
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
                    storeErrorMsg('Error fetching Branches: ' + ex.message);
                }
            });

        return () => {
            ignoreDownloadedData = true;
        };
    }, [userName, repoName]);

    const doMergePR: DoMergePR = async (num) => {
        if (repoName && userName) {
            return await mergePullRequest({
                owner: userName,
                repo: repoName,
                pull_number: num,
            });
        }
        return;
    };

    return (
        <>
            <UserRepo user={user} repo={repo} repoName={repoName} userName={userName} doMergePR={doMergePR} />

            {errorMsg && (
                <Alert status="error">
                    <AlertIcon />
                    {errorMsg}
                </Alert>
            )}
        </>
    );
}
