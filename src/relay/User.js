import Relay from 'react-relay';

import User from '../components/User';

// bad formatting:
export
default
Relay.createContainer(User, {
    fragments: {
        user: () => Relay.QL`
fragment on GithubUser {
    login
avatar_url
}
        `,
    },
    name: 'User',
});
