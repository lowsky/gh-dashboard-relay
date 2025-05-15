import { graphql, useFragment } from 'react-relay';
import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';

import type { MergePullRequestsResponseDataType } from 'restinpeace/github';

import doMergePRAction from 'app/actions/doMergePRAction';
import { PullRequestMergeFragment_ref$key } from './__generated__/PullRequestMergeFragment_ref.graphql';
import { useUserRepoFromRouter } from 'components/useUserRepoFromRoute';

export type DoMergePR = () => Promise<MergePullRequestsResponseDataType | null>;

type PullRequestInfoProps = {
    associatedPullRequest: PullRequestMergeFragment_ref$key;
};

export default function PullRequestMerge({ associatedPullRequest }: PullRequestInfoProps) {
    const { userName, repoName } = useUserRepoFromRouter();

    const node = useFragment<PullRequestMergeFragment_ref$key>(
        graphql`
            fragment PullRequestMergeFragment_ref on PullRequest {
                headRefOid
                number
                url
                title
                # body
                # bodyText
                mergeStateStatus
                closed
                isDraft
                # isMergeQueueEnabled
                isInMergeQueue
                # viewerCanDisableAutoMerge
                # viewerCanEnableAutoMerge
                mergeable
                merged
                locked
            }
        `,
        associatedPullRequest
    );

    const { number, url, title, closed, merged, locked, headRefOid, isDraft, isInMergeQueue, mergeStateStatus } = node;
    const sha = headRefOid;

    const doMergePR: DoMergePR = async () => {
        return doMergePRAction(number, userName!, repoName!, sha);
    };

    return (
        <VStack width="6em" key={number}>
            {url ? (
                <Link href={url} title={title ?? '-no-title-'} rel="noopener noreferrer nofollow">
                    <Icon>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                    </Icon>
                    <span>{number}</span>
                    <Text color="fg.muted">{mergeStateStatus && mergeStateStatus}</Text>
                </Link>
            ) : (
                <span>
                    <Icon>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                    </Icon>
                    {number}
                </span>
            )}
            {closed && 'closed'}
            {isDraft && 'draft'}
            {isInMergeQueue && 'inMergeQueue'}
            {merged && 'merged'}
            {locked && 'locked'}
            <MergeButtonWithErrorStatus doMergePR={doMergePR} />
        </VStack>
    );
}
