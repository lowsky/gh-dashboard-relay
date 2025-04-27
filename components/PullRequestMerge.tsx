import { Icon, Link, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from './MergeButtonWithErrorStatus';
import type { PullRequestData } from './PullRequestInfo';
import type { MergePullRequestsResponseDataType } from 'restinpeace/github';

export type DoMergePR = () => Promise<MergePullRequestsResponseDataType | null>;

export type PullRequestInfoProps = {
    pullRequest: PullRequestData;
    doMergePR?: DoMergePR;
    associatedPullRequests: any;
};

export default function PullRequestMerge({ associatedPullRequests, doMergePR }: PullRequestInfoProps) {
    if (associatedPullRequests.length === 0) {
        return null;
    }

    return (associatedPullRequests.edges ?? []).filter(Boolean).map(({ node }) => {
        if (!node) return null;
        const { number, url, title } = node;
        return (
            <VStack width="6em" key={number}>
                {url ? (
                    <Link href={url} title={title ?? '-no-title-'} rel="noopener noreferrer nofollow">
                        <Icon mr={1}>
                            <FontAwesomeIcon icon={faCodePullRequest} />
                        </Icon>
                        {number}
                    </Link>
                ) : (
                    <span>
                        <Icon mr={1}>
                            <FontAwesomeIcon icon={faCodePullRequest} />
                        </Icon>
                        {number}
                    </span>
                )}

                <MergeButtonWithErrorStatus doMergePR={doMergePR} />
            </VStack>
        );
    });
}
