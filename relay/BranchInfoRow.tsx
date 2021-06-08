import { createFragmentContainer, graphql } from 'react-relay';
import React from 'react';

import BranchInfoRow, { BranchInfoRowProps } from '../container/BranchInfoRow';

export default createFragmentContainer<BranchInfoRowProps>((props) => <BranchInfoRow {...props} />, {
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
