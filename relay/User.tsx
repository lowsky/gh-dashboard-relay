import { useFragment, graphql } from 'react-relay';

import User from '../components/User';

export default function UserFragmentContainer(props) {
    const data = useFragment(
        graphql`
            fragment User_user on GithubUser {
                login
                company
                avatar_url
            }
        `,
        props.user
    );

    return <User {...props} user={data} />;
}
