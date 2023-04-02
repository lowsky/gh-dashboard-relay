'use client'; // this directive should be at top of the file, before any imports.

import React, { useEffect, useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

import InternalLink from '../../../components/InternalLink';

import UserRepo from '../../../container/UserRepo';
import {
    Branches,
    fetchRepoBranchesWithCommitStatusesAndPullRequests,
    fetchUser,
    User,
} from '../../../restinpeace/github';
import { UserRepoFromUrlProvider, useUserRepo } from '../../../components/useUserRepoFromRoute';

export default function RestfulPage() {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href={'/restful'}>back to repos</InternalLink>
            <RestfulMain />
        </UserRepoFromUrlProvider>
    );
}

export function RestfulMain() {
    const { userName, repoName } = useUserRepo();
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

    return (
        <>
            <UserRepo user={user} repo={repo} />

            {errorMsg && (
                <Alert status="error">
                    <AlertIcon />
                    {errorMsg}
                </Alert>
            )}
        </>
    );
}
