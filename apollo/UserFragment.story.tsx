import type { Meta } from '@storybook/nextjs-vite';

import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

import UserFragment, { UserFragment_repositoryOwner } from './UserFragment';
import type { UserFragment_RepositoryOwnerFragment, UserFragmentStoryQueryQuery } from '../app/apollo/__gen__/graphql';

const STORY_QUERY = gql`
    query UserFragmentStoryQuery {
        repositoryOwner(login: "test-id") {
            ... on RepositoryOwner {
                ...UserFragment_repositoryOwner
            }
        }
        ${UserFragment_repositoryOwner}
    }
`;

const meta: Meta<typeof UserFragment> = {
    component: UserFragment,
};

export default meta;

export const WithoutAvatar = {
    args: {
        login: 'test-id',
    },
    render: function Render() {
        const { error, data, loading } = useQuery<UserFragmentStoryQueryQuery>(STORY_QUERY);
        if (loading) return <div>loading</div>;
        if (error) return <div>error: {error.message}</div>;
        if (!data) return <div>no entry found.</div>;
        const user: FragmentType<UserFragment_RepositoryOwnerFragment> = data.repositoryOwner!;
        return <UserFragment user={user} />;
    },
    parameters: {
        fragmentQuery: STORY_QUERY,
        apolloClient: {
            mocks: [
                {
                    request: {
                        query: STORY_QUERY,
                    },
                    result: {
                        //LATER: testing Error state:
                        //error: new Error('This is a mock network error'),
                        data: {
                            repositoryOwner: {
                                __typename: 'User',
                                ' $fragmentRefs': {
                                    UserFragment_RepositoryOwner_User_Fragment: {
                                        ' $fragmentName': 'UserFragment_RepositoryOwner_User_Fragment',
                                        //      __typename: 'User',
                                        id: 'test-id',
                                        login: 'test-id',
                                        company: 'company',
                                        avatarUrl: 'https://avatars2.githubusercontent.com/u/217931',
                                    },
                                },
                            },
                        } satisfies UserFragmentStoryQueryQuery,
                    },
                },
            ],
        },
    },
};
