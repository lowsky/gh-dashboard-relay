import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import BranchesTable from '../container/BranchesTable';

export default createFragmentContainer(
    (props) => <BranchesTable {...props}/>,
    graphql`
        fragment BranchesTable_repo on GithubRepo {
            branches {
                ...BranchInfoRow_branch
            }
        }
    `
);
