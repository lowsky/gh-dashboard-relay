import { graphql, useFragment } from 'react-relay';

import type { UserFragment_user$data, UserFragment_user$key } from './__generated__/UserFragment_user.graphql';
import User from '../components/User';

const userFragment = graphql`
    fragment UserFragment_user on User {
        # eslint-disable-next-line relay/unused-fields
        login
        # eslint-disable-next-line relay/unused-fields
        company
        # eslint-disable-next-line relay/unused-fields
        avatarUrl
    }
`;

interface Props {
    user: UserFragment_user$key;
}

export default function UserFragment({ user }: Props) {
    const data: UserFragment_user$data = useFragment<UserFragment_user$key>(userFragment, user);
    return <User user={data} />;
}
