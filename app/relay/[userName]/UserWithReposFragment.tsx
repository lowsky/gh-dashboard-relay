import { graphql, useFragment } from 'react-relay';
import {
    UserWithReposFragment_user$data,
    UserWithReposFragment_user$key,
} from './__generated__/UserWithReposFragment_user.graphql';
import RepoListFragment from '../../../relay/RepoListFragment';
import UserFragmentContainer from '../../../relay/UserFragment';

const userFragment = graphql`
    fragment UserWithReposFragment_user on User {
        login
        company
        avatarUrl
        ...UserFragment_user
        ...RepoListFragment_user
    }
`;

interface Props {
    user: UserWithReposFragment_user$key;
}

export default function UserWithReposFragment(props: Props) {
    const data: UserWithReposFragment_user$data = useFragment<UserWithReposFragment_user$key>(userFragment, props.user);
    return (
        <>
            <UserFragmentContainer user={data} />
            <RepoListFragment user={data} />
        </>
    );
}
