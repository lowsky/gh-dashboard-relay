import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { MergeButtonWithErrorStatus } from '../components/MergeButtonWithErrorStatus';
import type { MergePullRequestsResponseDataType } from 'restinpeace/github';
import doMergePRAction from '../app/actions/doMergePRAction';
import { BranchInfoRowFragment_ref$data } from './__generated__/BranchInfoRowFragment_ref.graphql';
import { useUserRepoFromRouter } from '../components/useUserRepoFromRoute';

export type DoMergePR = () => Promise<MergePullRequestsResponseDataType | null>;

export type PullRequestInfoProps = {
    //old associatedPullRequests?: RelayCon<PullRequestInfo_pullRequest$data> | null;
    associatedPullRequests: BranchInfoRowFragment_ref$data['associatedPullRequests'];
};

export default function PullRequestMerge({ associatedPullRequests }: PullRequestInfoProps) {
    const { userName, repoName } = useUserRepoFromRouter();
    if (!associatedPullRequests) {
        return null;
    }

    return (associatedPullRequests.edges ?? []).map((edge) => {
        if (!edge?.node) return null;

        const { node } = edge;
        if (!node) return null;

        const { number, url, title, closed, merged, locked, headRefOid, isDraft, isInMergeQueue, mergeStateStatus } =
            node;
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
                {merged && 'mered'}
                {locked && 'locked'}
                <MergeButtonWithErrorStatus doMergePR={doMergePR} />
            </VStack>
        );
    });
}
