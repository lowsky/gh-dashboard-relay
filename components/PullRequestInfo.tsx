import React, { useEffect, useState } from 'react';

import { Maybe } from '../lib/types/resolvers';
import { DoMergePR } from '../container/UserRepo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button, Icon, Link, VStack } from '@chakra-ui/react';
import { createResource } from '../restinpeace/UserRepo';
import { fetchRepoPullRequestsAssociatedWithCommit } from '../lib/github';

export type PullRequestInfoProps = {
    pullRequest?: PullRequestData;

    userName?: Maybe<string>;
    repoName?: Maybe<string>;
    sha?: Maybe<string>;

    doMergePR?: DoMergePR;
};

export type PullRequestData = {
    url?: Maybe<string>;
    title?: Maybe<string>;
    number: number;
};

const getPR = createResource(
    ({ userName, repoName, sha }) => fetchRepoPullRequestsAssociatedWithCommit(userName, repoName, sha),
    ({ userName, repoName, sha }) => `pr/${userName}/${repoName}/${sha}`
);

export default function PullRequestInfo({ pullRequest, doMergePR, userName, repoName, sha }: PullRequestInfoProps) {
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

    // load on-demand, if no pullRequest given
    const { number, title, url } = pullRequest ?? getPR.read(null, { userName, repoName, sha })?.find?.(Boolean) ?? {};

    return (
        <VStack>
            <Link href={url ?? ''} title={title ?? ''} rel="noopener noreferrer nofollow">
                #{number}
            </Link>
            {doMergePR && (
                <Button
                    ml={1}
                    size="xs"
                    variant="outline"
                    onClick={() => setMergeRequest(doMergePR(number))}
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
