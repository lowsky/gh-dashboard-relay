import { createFragmentContainer, graphql } from 'react-relay';

import BranchInfoRow from '../container/BranchInfoRow';

export default createFragmentContainer(BranchInfoRow, {
    branch: graphql`
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
});
