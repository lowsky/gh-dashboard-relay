import { graphql, useFragment } from 'react-relay';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import PullRequestMerge, { type DoMergePR } from 'components/PullRequestMerge';
import doMergePRAction from 'app/actions/doMergePRAction';

export default function PRFragmentContainer(props) {
    const pullRequest = useFragment(
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
        props.pullRequest
    );

    const { userName, repoName } = useUserRepo();
    const sha = pullRequest?.head?.sha;

    const doMergePR: DoMergePR = async () => {
        const mergeResult = doMergePRAction(pullRequest.number, userName, repoName, sha);
        return mergeResult;
    };

    return <PullRequestMerge pullRequest={pullRequest} doMergePR={doMergePR} />;
}
