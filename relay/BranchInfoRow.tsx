import { graphql, useFragment } from 'react-relay';

import BranchInfoRow from '../container/BranchInfoRow';

export default function BranchInfoRowFragmentContainer(props) {
    const branch = useFragment(
        graphql`
            fragment BranchInfoRow_branch on GithubBranch {
                name
                lastCommit {
                    ...CommitWithStatuses_commit
                    associatedPullRequests {
                        ...PullRequestInfo_pullRequest
                    }
                }
            }
        `,
        props.branch
    );
    return <BranchInfoRow branch={branch} />;
}
