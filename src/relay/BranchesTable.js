import Relay from 'react-relay';

import BranchesTable from '../container/BranchesTable';
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
