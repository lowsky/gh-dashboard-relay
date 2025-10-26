import { graphql, useFragment } from 'react-relay';
import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';
import { PullRequestMergeFragment_ref$key } from './__generated__/PullRequestMergeFragment_ref.graphql';
import useMergePR from './useMergePR';
import { Spinner } from 'components/Spinner';

export type DoMergePR = () => Promise<unknown | null>;

type PullRequestInfoProps = {
    associatedPullRequest: PullRequestMergeFragment_ref$key;
};

export default function PullRequestMerge({ associatedPullRequest }: PullRequestInfoProps) {
    const pr = useFragment<PullRequestMergeFragment_ref$key>(
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
                merged
                mergeable
            }
        `,
        associatedPullRequest
    );

    const { number, id, url, title, closed, headRefOid, isDraft, mergeStateStatus, merged, mergeable } = pr;

    const mergePR = useMergePR();
    const doMergePR: DoMergePR = async () => mergePR(headRefOid, id);

    const isClean = mergeStateStatus === 'CLEAN';
    return (
        <VStack width="6em">
            {url ? (
                <Link href={url} title={title ?? '-no-title-'} rel="noopener noreferrer nofollow">
                    <Icon>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                    </Icon>
                    <span>{number}</span>
                    {mergeStateStatus && !isClean && <Text color="fg.muted">{mergeStateStatus}</Text>}
                    {mergeStateStatus === 'UNKNOWN' && <Spinner size="xs" />}
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
            {!merged && mergeable && isClean && <MergeButtonWithErrorStatus doMergePR={doMergePR} />}
        </VStack>
    );
}
