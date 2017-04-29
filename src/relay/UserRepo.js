import Relay from 'react-relay';

import UserRepo from '../container/UserRepo';

import User from './User';
import BranchesTable from './BranchesTable';
import RepoContainer from './Repo';

export default Relay.createContainer(UserRepo, {
    initialVariables: {
        username: 'lowsky',
        ownerUsername: 'lowsky',
        repoName: 'dashboard',
    },
    fragments: {
        github: () => Relay.QL`
            fragment on GithubAPI {
                user(username:$username) {
                    ${User.getFragment('user')}
                }
                repo(ownerUsername: $ownerUsername, name: $repoName) {
                     ${RepoContainer.getFragment('repo')}
                     ${BranchesTable.getFragment('repo')}
                }
            }
        `,
    },
    name: 'UserRepo',
});
