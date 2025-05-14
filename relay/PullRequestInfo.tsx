import { graphql, useFragment } from 'react-relay';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import { type DoMergePR } from 'relay/PullRequestMerge';
import doMergePRAction from 'app/actions/doMergePRAction';
import {
    PullRequestInfo_pullRequest$data,
    PullRequestInfo_pullRequest$key,
} from './__generated__/PullRequestInfo_pullRequest.graphql';
import { MergeButtonWithErrorStatus } from 'components/MergeButtonWithErrorStatus';

export default function PullRequestInfoFragment({
    pullRequest,
}: {
    pullRequest: PullRequestInfo_pullRequest$key | null;
}) {
    const data: PullRequestInfo_pullRequest$data | null | undefined = useFragment<PullRequestInfo_pullRequest$key>(
        graphql`
            fragment PullRequestInfo_pullRequest on PullRequest {
                title
                number
                url
                headRef {
                    id
                }
            }
        `,
        pullRequest
    );

    const { userName, repoName } = useUserRepo();

    const sha = data?.headRef?.id;
    if (!sha) {
        return null;
    }

    const doMergePR: DoMergePR = async () => {
        const mergeResult = await doMergePRAction(data.number, userName, repoName, sha);
        return mergeResult;
    };

    return (
        <>
            <a href={data.url} title={data.title}>
                PR #{data.number}
            </a>
            <MergeButtonWithErrorStatus doMergePR={doMergePR} />
        </>
    );
}
