import { createFragmentContainer } from 'react-relay';
import graphql from "babel-plugin-relay/macro";


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
