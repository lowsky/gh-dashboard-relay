import React from 'react';
import Relay from 'react-relay';

import BranchesTable from '../components/BranchesTable';
import BranchInfoRow from './BranchInfoRow';

export default Relay.createContainer(BranchesTable, {
    fragments: {
        repo: () => Relay.QL`
            fragment on GithubRepo {
                branches {
                    ${BranchInfoRow.getFragment('branch')}
                }
            }
        `
    }
});
