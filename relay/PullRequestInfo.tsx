import { createFragmentContainer, graphql } from 'react-relay';

import React, { useEffect, useState } from 'react';

import { Maybe } from '../lib/types/resolvers';
import { DoMergePR } from '../container/UserRepo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export type PullRequestInfoProps = {
    pullRequest: PullRequestData,
    doMergePR?: DoMergePR,
};

export type PullRequestData = {
    url?: Maybe<string>,
    title?: Maybe<string>,
    number: number,
};

export const PullRequestInfo = ({ pullRequest, doMergePR }: PullRequestInfoProps) => {
    const [mergeRequest, setMergeRequest] = useState<Promise<unknown>>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        if(mergeRequest) {
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
            <a href={pullRequest.url ?? ''} title={pullRequest.title ?? ''} rel="noopener noreferrer nofollow">
                #{pullRequest.number}
            </a>
            {doMergePR && <button onClick={() => setMergeRequest(doMergePR(pullRequest.number))} disabled={!!mergeRequest}>
                    Rebase&Merge
                </button>
            }
            {!!error && (
                <span className="icon is-small pl-3">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                </span>
            )}
            {!!mergeRequest && (
                <span className="icon is-small pl-3">
                    <FontAwesomeIcon icon={faSpinner} size="1x" />
                </span>
            )}
        </>
    );
};

export default createFragmentContainer<PullRequestInfoProps>(PullRequestInfo, {
    pullRequest: graphql`
        fragment PullRequestInfo_pullRequest on PullRequest {
            title
            number
            url
        }
    `,
});
