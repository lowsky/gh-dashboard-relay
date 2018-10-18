import { createFragmentContainer } from 'react-relay';
import React from 'react';
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
    (props) => (<BranchInfoRow {...props}/>),
    graphql`
        fragment BranchInfoRow_branch on GithubBranch {
            name
            lastCommit {
                ...CommitWithStatuses_commit
            }
        }
    `
);
