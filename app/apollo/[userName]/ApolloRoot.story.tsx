import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { USER_WITH_REPOS_QUERY, UserPageContent } from './ApolloRoot';
import type { GetRepositoriesQuery, GetUserWithReposQuery } from '../__gen__/graphql';
import { REPOS_QUERY } from 'apollo/RepoList';
import type { Unmasked } from '@apollo/client/masking';

const meta: Meta<typeof UserPageContent> = {
    component: UserPageContent,
};

export default meta;

type Story = StoryObj<typeof UserPageContent>;

type UnmaskedGetRepositoriesQuery = Unmasked<GetRepositoriesQuery>;

export const Default: Story = {
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
                        //LATER? error: new Error('An error occurred'),
                        //data: {},
                        data: {
                            repositoryOwner: {
                                id: 'test-id',
                                login: 'test-id',
                                ' $fragmentRefs': {
                                    UserWithReposFragment_RepositoryOwner_User_Fragment: {
                                        __typename: 'User',
                                        id: 'string',
                                        login: 'string',
                                        //' $fragmentRefs'?: { UserFragment_RepositoryOwner_User_Fragment: UserFragment_RepositoryOwner_User_Fragment }
                                        ' $fragmentName': 'UserWithReposFragment_RepositoryOwner_User_Fragment',
                                    },
                                },
                                __typename: 'User',
                            },
                            rateLimit: {
                                limit: 5,
                                remaining: 10,
                                used: 5,
                                resetAt: -1, // dummy, unused
                            },
                        } satisfies GetUserWithReposQuery,
                    },
                },
                {
                    // testing: show loading state
                    delay: 10000,
                    request: {
                        query: REPOS_QUERY,
                        variables: {
                            first: 10,
                        },
                    },
                    result: {
                        data: {
                            repositoryOwner: {
                                id: 'test-id',
                                login: 'test-id',
                                repositories: {
                                    totalCount: 1,
                                    pageInfo: {
                                        hasNextPage: false,
                                    },
                                    edges: [
                                        {
                                            node: {
                                                __typename: 'Repository',
                                                id: 'dashboard-id',
                                                name: 'dashboard',
                                                nameWithOwner: 'unused',
                                                isFork: true,
                                                url: 'https://github.com/lowsky/dashboard',
                                                pullRequests: {
                                                    totalCount: 4,
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        } satisfies UnmaskedGetRepositoriesQuery,
                    },
                },
            ],
        },
    },
};
