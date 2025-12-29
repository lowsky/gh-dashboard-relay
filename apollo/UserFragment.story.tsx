import { Meta } from '@storybook/nextjs-vite';

import UserFragment, { STORY_QUERY } from './UserFragment';
//import { GetUserWithReposQuery, GetUserWithReposQueryVariables } from '../app/apollo/__gen__/graphql';
//import { USER_WITH_REPOS_QUERY } from '../app/apollo/[userName]/ApolloRoot';
import { useQuery, useSuspenseQuery } from '@apollo/client/react';
//import { graphql } from '../app/apollo/__gen__';
//import { UserFragment_user$data } from 'relay/__generated__/UserFragment_user.graphql';

//const user: FragmentType<UserFragment_RepositoryOwnerFragment> = {};

const meta: Meta<typeof UserFragment> = {
    component: UserFragment,
    decorators: [
        (Story) => {
            console.error('decorators');

            const { error, data, loading } = useQuery(STORY_QUERY);

            if (loading) return <div> loading data</div>;
            if (error) return <div>Error loading user data: {error.message}</div>;
            if (!data) return <div>,no data...</div>;

            console.error(data);

            const { node } = data;
            if (!node) {
                return (
                    <>
                        User <strong>Username</strong> was not found! <Story />
                    </>
                );
            }

            return (
                <>
                    <Story userName={'test-idsss'} data={data} />
                </>
            );
        },
    ],
};
export default meta;

export const WithoutAvatar = {
    parameters: {
        apolloClient: {
            mocks: [
                {
                    request: {
                        query: STORY_QUERY,
                    },
                    result: {
                        //error: new Error('This is a mock network error'),
                        data: {
                            node: {
                                id: 'test-id',
                                login: 'test-id',
                                company: 'company',
                                __typename: 'User',
                                //' $fragmentType': 'UserFragment_repositoryOwner',
                            },
                        },
                    },
                },
            ],
        },
    },
};
