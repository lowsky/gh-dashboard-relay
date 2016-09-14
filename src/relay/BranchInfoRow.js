import Relay from 'react-relay';

import BranchInfoRow from '../components/BranchInfoRow';
import CommitWithStatuses, {fakeCommitWithStatuses} from './CommitWithStatuses';

export const fakeBranchInfo = {
    name: 'fake',
    lastCommit: {
        ...fakeCommitWithStatuses
    }
};

export default Relay.createContainer(BranchInfoRow, {
    fragments: {
        branch: () => Relay.QL`
            fragment on GithubBranch {
                name
                lastCommit {
                    ${CommitWithStatuses.getFragment('commit')}
                }
            }
        `
    }
});
