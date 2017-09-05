import { createFragmentContainer, graphql } from 'react-relay';
import User from '../components/User';

export default createFragmentContainer(
    User,
    graphql`
        fragment User_user on GithubUser {
            login
            company
            avatar_url
        }
    `
);
