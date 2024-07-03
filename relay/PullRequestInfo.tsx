import { graphql, useFragment } from 'react-relay';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import PullRequestMerge, { type DoMergePR } from 'components/PullRequestMerge';
import doMergePRAction from '../components/doMergePRAction';

export default function PRFragmentContainer(props) {
    const pullRequest = useFragment(
        graphql`
            fragment PullRequestInfo_pullRequest on PullRequest {
                title
                number
                html_url
                head {
                    sha
                }
            }
        `,
        props.pullRequest
    );

    const { userName, repoName } = useUserRepo();
    const sha = pullRequest?.head?.sha;

    const doMergePR1: DoMergePR = async () => doMergePRAction(pullRequest.number, userName, repoName, sha);

    return <PullRequestMerge pullRequest={pullRequest} doMergePR={doMergePR1} />;
}
