import { FragmentType, gql, useFragment } from '@apollo/client';

import {
    UserFragment_RepositoryOwnerFragment,
    UserWithReposFragment_RepositoryOwnerFragment,
} from '../__gen__/graphql';
import type { NoInfer } from '@apollo/client/react/types/types';

import UserFragmentContainer, { UserFragment_repositoryOwner } from 'apollo/UserFragment';
import { Suspense } from 'react';
import { Spinner } from '../../../components/Spinner';
import RepoList from '../../../apollo/RepoList';

export const UserWithReposFragment_repositoryOwner = gql`
    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {
        ...UserFragment_repositoryOwner
        login # used later for paginated fetching of repos
    }
    ${UserFragment_repositoryOwner}
`;

interface Props {
    repositoryOwner: FragmentType<NoInfer<UserWithReposFragment_RepositoryOwnerFragment>>;
}

export default function UserWithReposFragment(props: Props) {
    const { data } = useFragment<UserWithReposFragment_RepositoryOwnerFragment>({
        fragment: UserWithReposFragment_repositoryOwner,
        fragmentName: 'UserWithReposFragment_repositoryOwner',
        from: props.repositoryOwner,
    });

    if (!data) return null;

    const login = data.login;
    let user: FragmentType<NoInfer<UserFragment_RepositoryOwnerFragment>>;
    user = data as FragmentType<NoInfer<UserFragment_RepositoryOwnerFragment>>;

    return (
        <>
            <UserFragmentContainer user={user} />
            <Suspense fallback={<Spinner />}>
                <RepoList login={login!} />
            </Suspense>
        </>
    );
}
