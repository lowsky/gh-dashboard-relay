import { FragmentType, gql, useFragment } from '@apollo/client';

import { UserWithReposFragment_RepositoryOwnerFragment } from '../__gen__/graphql';

import UserFragmentContainer, { UserFragment_repositoryOwner } from 'apollo/UserFragment';
import { Suspense } from 'react';
import { Spinner } from '../../../components/Spinner';
import RepoList from '../../../apollo/RepoList';

export const UserWithReposFragment_repositoryOwner = gql`
    fragment UserWithReposFragment_repositoryOwner on RepositoryOwner {
        id # key value for resolving the fragment in child component
        ...UserFragment_repositoryOwner
        login # used later for paginated fetching of repos
    }
    ${UserFragment_repositoryOwner}
`;

interface Props {
    repositoryOwner: FragmentType<UserWithReposFragment_RepositoryOwnerFragment>;
}

export default function UserWithReposFragment(props: Props) {
    const { data, complete } = useFragment<UserWithReposFragment_RepositoryOwnerFragment>({
        fragment: UserWithReposFragment_repositoryOwner,
        fragmentName: 'UserWithReposFragment_repositoryOwner',
        from: props.repositoryOwner,
    });

    if (!complete) return 'loading...';

    return (
        <>
            <UserFragmentContainer user={data} />
            <Suspense fallback={<Spinner />}>
                <RepoList login={data.login} />
            </Suspense>
        </>
    );
}
