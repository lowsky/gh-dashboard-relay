import React, { useEffect, useState } from 'react';

import { Maybe } from '../lib/types/resolvers';
import { DoMergePR } from '../container/UserRepo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button, Icon, Link } from '@chakra-ui/react';

export type PullRequestInfoProps = {
    pullRequest: PullRequestData;
    doMergePR?: DoMergePR;
};

export type PullRequestData = {
    url?: Maybe<string>;
    title?: Maybe<string>;
    number: number;
};

export default function PullRequestInfo({ pullRequest, doMergePR }: PullRequestInfoProps) {
    const [mergeRequest, setMergeRequest] = useState<Promise<unknown>>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (mergeRequest) {
            setError(undefined);
            mergeRequest
                .catch((err) => {
                    return setError(err);
                })
                .finally(() => {
                    return setMergeRequest(undefined);
                });
        }
    }, [mergeRequest]);

    return (
        <>
            <Link href={pullRequest.url ?? ''} title={pullRequest.title ?? ''} rel="noopener noreferrer nofollow">
                #{pullRequest.number}
            </Link>
            {doMergePR && (
                <Button
                    size={'xs'}
                    onClick={() => setMergeRequest(doMergePR(pullRequest.number))}
                    disabled={!!mergeRequest}>
                    Rebase&Merge
                </Button>
            )}
            {!!error && (
                <Icon>
                    <FontAwesomeIcon icon={faExclamationTriangle as IconProp} size="1x" />
                </Icon>
            )}
            {!!mergeRequest && (
                <Icon>
                    <FontAwesomeIcon icon={faSpinner as IconProp} size="1x" />
                </Icon>
            )}
        </>
    );
}
