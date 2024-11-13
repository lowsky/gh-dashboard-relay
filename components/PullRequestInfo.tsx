import React from 'react';

import { Maybe } from 'restinpeace/types';
import PullRequestMerge from './PullRequestMerge';

export type PullRequestInfoProps = {
    pullRequest?: PullRequestData;
    sha?: Maybe<string>;
    userName?: Maybe<string>;
    repoName?: Maybe<string>;
};

export type PullRequestData = {
    html_url?: Maybe<string>;
    title?: Maybe<string>;
    number: number;
};

export default function PullRequestInfoClient({ pullRequest /*sha, userName, repoName*/ }: PullRequestInfoProps) {
    if (pullRequest) {
        return <PullRequestMerge pullRequest={pullRequest} />;
    }
    /* temporary disabled, could be implemented later, using some library to load data
    if (sha && userName && repoName) {
        return <PullRequestMerge sha={sha} userName={userName} repoName={repoName} />;
    }
    */
    return null;
}
