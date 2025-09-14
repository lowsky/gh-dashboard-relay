import { Suspense } from 'react';
import { FragmentType, gql, TypedDocumentNode } from '@apollo/client';
import { useFragment } from '@apollo/client/react';

import {
    UserFragment_RepositoryOwnerFragment,
    UserWithReposFragment_RepositoryOwnerFragment,
} from '../__gen__/graphql';

import UserFragmentContainer, { UserFragment_repositoryOwner } from 'apollo/UserFragment';

import { Spinner } from '../../../components/Spinner';
import RepoList from '../../../apollo/RepoList';

export const UserWithReposFragment_repositoryOwner: TypedDocumentNode<UserWithReposFragment_RepositoryOwnerFragment> = gql`
    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {
        ...UserFragment_repositoryOwner
        ... on User {
            id
        }
        ... on Organization {
            id
        }
        login # used later for paginated fetching of repos
    }
    ${UserFragment_repositoryOwner}
`;

interface Props {
    repositoryOwner: FragmentType<NoInfer<UserWithReposFragment_RepositoryOwnerFragment>>;
}

export default function UserWithReposFragment(props: Props) {
    const result: useFragment.Result<UserWithReposFragment_RepositoryOwnerFragment> =
        useFragment<UserWithReposFragment_RepositoryOwnerFragment>({
            fragment: UserWithReposFragment_repositoryOwner,
            fragmentName: 'UserWithReposFragment_repositoryOwner',
            from: props.repositoryOwner,
        });

    if (!result.data || !result.complete) return null;

    const { login } = result.data;
    const user: FragmentType<UserFragment_RepositoryOwnerFragment> = result.data;

    return (
        <>
            <UserFragmentContainer user={user} />
            <Suspense fallback={<Spinner />}>
                <RepoList login={login} />
            </Suspense>
        </>
    );
}
