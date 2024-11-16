
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
};

export default function PullRequestMerge(props: PullRequestInfoProps) {
    const { pullRequest, doMergePR } = props;
    const { number, html_url, title } = pullRequest;

    if (!number) {
        return null;
    }

    return (
        <VStack width="6em">
            {html_url ? (
                <Link href={html_url} title={title ?? '-no-title-'} rel="noopener noreferrer nofollow">
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

            {(
                <MergeButtonWithErrorStatus
                    doMergePR={doMergePR}
                />
            )}
        </VStack>
    );
}
