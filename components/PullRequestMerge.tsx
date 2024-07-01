'use client';
import { useEffect, useState } from 'react';

import { Icon, Link, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from './MergeButtonWithErrorStatus';
import type { PullRequestData } from './PullRequestInfo';
import type { MergePullRequestsResponseDataType } from 'restinpeace/github';

export type DoMergePR = () => Promise<MergePullRequestsResponseDataType | null>;

export type PullRequestInfoProps = {
    pullRequest: PullRequestData;
    doMergePR?: DoMergePR;
};

export default function PullRequestMerge(props: PullRequestInfoProps) {
    const { pullRequest, doMergePR } = props;
    const { number, html_url, title } = pullRequest;

    const [mergingInProgress, setMergingInProgress] = useState<Promise<MergePullRequestsResponseDataType | null>>();
    const [isMerged, setIsMerged] = useState(false);
    const [errorObject, setErrorObject] = useState<Error>();

    function logAndSetError(errorObject: Error) {
        console.error('Unsuccessful attempt to merge PR', number, errorObject.message);
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

    if (!number || !html_url) {
        return null;
    }

    const triggerMerging = () => setMergingInProgress(doMergePR?.());

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
            {!isMerged && doMergePR && (
                <MergeButtonWithErrorStatus
                    errorObject={errorObject}
                    mergingInProgress={mergingInProgress}
                    triggerMerging={triggerMerging}
                />
            )}
        </VStack>
    );
}
