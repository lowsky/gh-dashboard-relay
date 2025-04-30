import { graphql, useFragment } from 'react-relay';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import PullRequestMerge, { type DoMergePR } from 'relay/PullRequestMerge';
import doMergePRAction from 'app/actions/doMergePRAction';
import {
    PullRequestInfo_pullRequest$data,
    PullRequestInfo_pullRequest$key,
} from './__generated__/PullRequestInfo_pullRequest.graphql';

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
                # html_url
                # commits
                headRef {
                    id
                }
                # head { sha }
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
        debugger;
        const mergeResult = doMergePRAction(data.number, userName, repoName, sha);
        return mergeResult;
    };

    return <PullRequestMerge associatedPullRequests={[data]} doMergePR={doMergePR} />;
}
