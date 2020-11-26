import { createFragmentContainer } from 'react-relay';
import { graphql } from "react-relay";
import React from 'react';

import BranchesTable from '../container/BranchesTable';

export default createFragmentContainer(props => <BranchesTable {...props} />, {
    repo: graphql`
        fragment BranchesTable_repo on GithubRepo {
            branches {
                ...BranchInfoRow_branch
            }
        }
    `,
});
