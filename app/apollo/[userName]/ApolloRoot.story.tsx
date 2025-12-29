import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { USER_WITH_REPOS_QUERY, UserPageContent } from './ApolloRoot';

const meta: Meta<typeof UserPageContent> = {
    component: UserPageContent,
};

export default meta;
type Story = StoryObj<typeof UserPageContent>;

export const WithoutAvatar: Story = {
    args: {
        userName: 'test-id',
    },
    parameters: {
        apolloClient: {
            mocks: [
                {
                    request: {
                        query: USER_WITH_REPOS_QUERY,
                        variables: {
                            userName: 'test-id',
                        },
                    },
                    result: {
                        data: {
                            repositoryOwner: {
                                id: 'test-id',
                                login: 'test-id',
                                company: 'company',
                                __typename: 'User',
                                rateLimit: {
                                    limit: 5,
                                    remaining: 10,
                                    used: 5,
                                },
                            },
                        },
                    },
                },
            ],
        },
    },
};
