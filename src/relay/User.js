import Relay from 'react-relay';

import User from '../components/User';

export default Relay.createContainer(User, {
    fragments: {
        user: () => Relay.QL`
            fragment on GithubUser {
                login
                company
                avatar_url
            }
        `
    },
    name: 'User'
});
