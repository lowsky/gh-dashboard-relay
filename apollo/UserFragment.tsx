import { FragmentType, gql, useFragment } from '@apollo/client';

import { UserFragment_RepositoryOwnerFragment } from '../app/apollo/__gen__/graphql';
import type { NoInfer } from '@apollo/client/react/types/types';

import User from '../components/User';

export const UserFragment_repositoryOwner = gql`
    fragment UserFragment_repositoryOwner on RepositoryOwner {
        ... on User {
            id
            login
            company
            avatarUrl
        }
        ... on Organization {
            id
            login
            avatarUrl
        }
    }
`;

interface Props {
    user: FragmentType<NoInfer<UserFragment_RepositoryOwnerFragment>>;
}

export default function UserFragmentContainer(props: Props) {
    const { user } = props;
    const { data, complete } = useFragment({
        fragment: UserFragment_repositoryOwner,
        fragmentName: 'UserFragment_repositoryOwner',
        from: user,
    });

    if (!complete) return 'empty';

    return <User user={data} />;
}
