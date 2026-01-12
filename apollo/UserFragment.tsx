import type { FragmentType } from '@apollo/client';
import { gql } from '@apollo/client';

import { useFragment } from '@apollo/client/react';

import type { UserFragment_RepositoryOwnerFragment } from '../app/apollo/__gen__/graphql';

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
    user: FragmentType<UserFragment_RepositoryOwnerFragment>;
}

export default function UserFragmentContainer(props: Props) {
    const { user } = props;
    const { data, complete } = useFragment<UserFragment_RepositoryOwnerFragment>({
        fragment: UserFragment_repositoryOwner,
        fragmentName: 'UserFragment_repositoryOwner',
        from: user,
    });

    if (!complete) return 'incomplete, loading...';

    return <User user={data} />;
}
