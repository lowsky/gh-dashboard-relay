'use client';

import React, { useEffect, useState } from 'react';

import InternalLink from 'components/InternalLink';
import UserRepo from 'container/UserRepo';
import { UserRepoFromUrlProvider, useUserRepoFromRouter } from 'components/useUserRepoFromRoute';
import { Branches, User, getUnauthorizedGitHub } from 'restinpeace/github';

import { Alert } from 'components/ui/alert';

export default function RestfulPage() {
    const { userName, repoName } = useUserRepoFromRouter();
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href="/restful">back to repos</InternalLink>
            <RestfulMain userName={userName!} repoName={repoName!} />
        </UserRepoFromUrlProvider>
    );
}

interface RestfulMainProps {
    repoName: string;
    userName: string;
}

function RestfulMain({ repoName, userName }: RestfulMainProps) {
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

        getUnauthorizedGitHub()
            .fetchUser(userName)
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

        getUnauthorizedGitHub()
            .fetchRepoBranchesWithCommitStatusesAndPullRequests({ userName, repoName })
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

            {errorMsg && <Alert status="error">{errorMsg}</Alert>}
        </>
    );
}
