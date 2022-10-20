import React, { useEffect, useState } from 'react';

import { Maybe } from '../lib/types/resolvers';
import { DoMergePR } from '../container/UserRepo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button, Icon, Link, VStack } from '@chakra-ui/react';

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
    const [isMerged, setIsMerged] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        if (mergeRequest) {
            setError(undefined);
            mergeRequest
                .then(() => {
                    setIsMerged(true);
                })
                .catch((err) => {
                    return setError(err);
                })
                .finally(() => {
                    return setMergeRequest(undefined);
                });
        }
    }, [mergeRequest]);

    return (
        <VStack>
            <Link href={pullRequest.url ?? ''} title={pullRequest.title ?? ''} rel="noopener noreferrer nofollow">
                #{pullRequest.number}
            </Link>
            {doMergePR && (
                <Button
                    ml={1}
                    size="xs"
                    variant="outline"
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
            {!!isMerged && (
                <Icon>
                    <FontAwesomeIcon icon={faCheck as IconProp} size="1x" />
                </Icon>
            )}
        </VStack>
    );
}
