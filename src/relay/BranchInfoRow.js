import { createFragmentContainer, graphql } from 'react-relay';

import BranchInfoRow from '../container/BranchInfoRow';
import { fakeCommitWithStatuses } from './CommitWithStatuses';

export const fakeBranchInfo = {
    name: 'fake',
    lastCommit: {
        ...fakeCommitWithStatuses,
    },
};

export default createFragmentContainer(
    BranchInfoRow,
    graphql`
        fragment BranchInfoRow_branch on GithubBranch {
            name
            lastCommit {
                ...CommitWithStatuses_commit
            }
        }
    `
);
