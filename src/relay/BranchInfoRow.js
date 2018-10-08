import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

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
