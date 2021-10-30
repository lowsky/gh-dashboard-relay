import { createFragmentContainer, graphql } from 'react-relay';

import React from 'react';
import { Maybe } from '../lib/types/resolvers';
import { DoMergePR } from '../container/UserRepo';

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

    return (
        <>
            <a href={pullRequest.url ?? ''} title={pullRequest.title ?? ''}>
                #{pullRequest.number}
            </a>
            {doMergePR && <button onClick={() => doMergePR(pullRequest.number)}>
                Rebase&Merge
            </button>
            }
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
