import Relay from 'react-relay';

import Repo from '../components/Repo';

export default Relay.createContainer(Repo, {
    fragments: {
        repo: () => Relay.QL`
            fragment on GithubRepo {
                name
                owner {
                    login
                }
            }
        `,
    },
});
