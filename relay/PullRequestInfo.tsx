import { graphql, useFragment } from 'react-relay';

import { useUserRepo } from 'components/useUserRepoFromRoute';
import PullRequestMerge, { type DoMergePR } from 'components/PullRequestMerge';
import doMergePRAction from 'app/actions/doMergePRAction';
import { revalidateCache } from 'app/actions/doRevalidateCache';

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

    const doMergePR: DoMergePR = async () => {
        const mergeResult = doMergePRAction(pullRequest.number, userName, repoName, sha);
        await revalidateCache({ pathPrefix: 'relay', userName, repoName });
        return mergeResult;
    };

    return <PullRequestMerge pullRequest={pullRequest} doMergePR={doMergePR} />;
}
