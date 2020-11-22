import { createFragmentContainer } from 'react-relay';
import { graphql } from "react-relay";

import User from '../components/User';

export default createFragmentContainer(User, {
    user: graphql`
        fragment User_user on GithubUser {
            login
            company
            avatar_url
        }
    `,
});
