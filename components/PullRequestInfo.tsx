'use client';
import React, { useEffect, useState } from 'react';
import { Icon, Link, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { Maybe } from 'restinpeace/types';
import { getAuthorizedGitHub } from 'restinpeace/github';
import { createResource } from 'cache/reactCache';
import { useUserRepo } from './useUserRepoFromRoute';

import { useDoMergePR } from './useDoMergePR';
import { MergeButtonWithErrorStatus } from './MergeButtonWithErrorStatus';

export type PullRequestInfoProps = {
    pullRequest?: PullRequestData;
    sha?: Maybe<string>;
};

export type PullRequestData = {
    html_url?: Maybe<string>;
    title?: Maybe<string>;
    number: number;
};

const getPR = createResource(
    ({ userName, repoName, sha }) =>
        getAuthorizedGitHub().fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha),
    ({ userName, repoName, sha }) => `pr/${userName}/${repoName}/${sha.slice(0, 8)}`
);

export type DoMergePR = (num: number) => Promise<unknown>;

export default function PullRequestInfo({ pullRequest, sha }: PullRequestInfoProps) {
    const { userName, repoName } = useUserRepo();
    const doMergePR: DoMergePR = useDoMergePR({ userName, repoName });

    const [mergingInProgress, setMergingInProgress] = useState<Promise<unknown>>();
    const [isMerged, setIsMerged] = useState<boolean>(false);
    const [errorObject, setErrorObject] = useState<Error>();

    function logAndSetError(errorObject: Error) {
        console.error('Unsuccessful attempt to merge PR', pullRequest?.number, errorObject);
        setErrorObject(errorObject);
    }

    useEffect(() => {
        if (mergingInProgress) {
            setErrorObject(undefined);
            mergingInProgress
                .then(() => setIsMerged(true))
                .catch((err) => logAndSetError(err))
                .finally(() => setMergingInProgress(undefined));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mergingInProgress]);

    const { number, title, html_url } =
        pullRequest ??
        // load on-demand, if no pullRequest given
        getPR.read({ userName, repoName, sha })?.find?.(Boolean) ??
        {};

    if (!number || !html_url) {
        return null;
    }

    const triggerMerging = () => setMergingInProgress(doMergePR(number));

    return (
        <VStack width="6em">
            <Link href={html_url ?? ''} title={title ?? ''} rel="noopener noreferrer nofollow">
                <Icon mr={1}>
                    <FontAwesomeIcon icon={faCodePullRequest} />
                </Icon>
                {number}
            </Link>
            {isMerged && (
                <Icon>
                    <FontAwesomeIcon icon={faCheck} size="1x" />
                </Icon>
            )}
            {!isMerged && (
                <MergeButtonWithErrorStatus
                    errorObject={errorObject}
                    mergingInProgress={mergingInProgress}
                    triggerMerging={triggerMerging}
                />
            )}
        </VStack>
    );
}
