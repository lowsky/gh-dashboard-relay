import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { FragmentType, gql } from '@apollo/client';
import useMergePR from './useMergePR';
import { useFragment } from '@apollo/client/react';
import { Spinner } from 'components/Spinner';
import { PullRequestMergeFragment_RefFragment } from '../app/apollo/__gen__/graphql';
import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';

export type DoMergePR = () => Promise<unknown>;

export const PullRequestMergeFragment_ref = gql`
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
`;

type PullRequestInfoProps = {
    associatedPullRequest: FragmentType<PullRequestMergeFragment_RefFragment>;
};

export default function PullRequestMerge({ associatedPullRequest }: PullRequestInfoProps) {
    const result = useFragment<PullRequestMergeFragment_RefFragment>({
        fragment: PullRequestMergeFragment_ref,
        from: associatedPullRequest,
    });
    const mergePR = useMergePR();

    if (!result.data || !result.complete) return null;

    const { number, id, url, title, closed, headRefOid, isDraft, mergeStateStatus, merged, mergeable } = result.data;

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
                    {mergeStateStatus && !isClean && !merged && <Text color="fg.muted">{mergeStateStatus}</Text>}
                    {mergeStateStatus === 'UNKNOWN' && !merged && <Spinner size="xs" />}
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
