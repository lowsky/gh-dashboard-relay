import { graphql, useFragment } from 'react-relay';
import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';
import { PullRequestMergeFragment_ref$key } from './__generated__/PullRequestMergeFragment_ref.graphql';
import useMergePR from './useMergePR';

export type DoMergePR = () => Promise<unknown | null>;

type PullRequestInfoProps = {
    associatedPullRequest: PullRequestMergeFragment_ref$key;
};

export default function PullRequestMerge({ associatedPullRequest }: PullRequestInfoProps) {
    const node = useFragment<PullRequestMergeFragment_ref$key>(
        graphql`
            fragment PullRequestMergeFragment_ref on PullRequest {
                id
                headRefOid
                number
                url
                title
                mergeStateStatus
                closed
                isDraft
                isInMergeQueue
            }
        `,
        associatedPullRequest
    );

    const { number, id, url, title, closed, headRefOid, isDraft, isInMergeQueue, mergeStateStatus } = node;

    const mergePR = useMergePR();
    const doMergePR: DoMergePR = async () => mergePR(headRefOid, id);

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
            <MergeButtonWithErrorStatus doMergePR={doMergePR} />
        </VStack>
    );
}
