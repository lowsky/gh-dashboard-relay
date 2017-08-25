import { createFragmentContainer, graphql } from 'react-relay';

import BranchesTable from '../container/BranchesTable';

export default createFragmentContainer(
    BranchesTable,
    graphql`
        fragment BranchesTable_repo on GithubRepo {
            branches {
                ...BranchInfoRow_branch
            }
        }
    `
);
