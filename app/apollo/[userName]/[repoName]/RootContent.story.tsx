import preview from '../../../../.storybook/preview';

import { REPOSITORYOWNER_QUERY, UserRepoPageContent } from './Root';
import { REPOS_QUERY } from 'apollo/RepoList';
import { GetUserRepoBranchesQuery } from 'app/apollo/__gen__/graphql';
import { UnmaskedGetRepositoriesQuery } from '../ApolloRoot.story';

const meta = preview.meta({
    component: UserRepoPageContent,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const WithUserAndRepo = meta.story({
    parameters: {
        apolloClient: {
            mocks: [
                {
                    request: {
                        query: REPOSITORYOWNER_QUERY,
                        variables: {
                            userName: 'login',
                        },
                    },
                    result: {
                        //LATER? error: new Error('An error occurred'),
                        //data: {},
                        data: {
                            repositoryOwner: {
                                id: 'test-id',
                                login: 'test-id',
                                avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
                                ' $fragmentRefs': {
                                    UserFragment_RepositoryOwner_User_Fragment: {
                                        __typename: 'User',
                                        company: 'company',
                                        avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
                                        id: 'login',
                                        login: 'login',
                                        ' $fragmentName': 'UserFragment_RepositoryOwner_User_Fragment',
                                    },
                                },
                                __typename: 'User',
                            },
                        } satisfies GetUserRepoBranchesQuery,
                    },
                },
                {
                    // testing: show loading state
                    delay: 10000,
                    request: {
                        query: REPOS_QUERY,
                        variables: {
                            count: 10,
                            login: 'login',
                        },
                    },
                    result: {
                        data: {
                            repositoryOwner: {
                                __typename: 'Organization',
                                id: 'test-id',
                                login: 'test-id',
                                repositories: {
                                    totalCount: 1,
                                    pageInfo: {
                                        __typename: 'PageInfo',
                                        hasNextPage: false,
                                        endCursor: null,
                                    },
                                    edges: [
                                        {
                                            __typename: 'RepositoryEdge',
                                            node: {
                                                __typename: 'Repository',
                                                id: 'dashboard-id',
                                                name: 'dashboard',
                                                nameWithOwner: 'unused',
                                                isFork: true,
                                                url: 'https://github.com/lowsky/dashboard',
                                                pullRequests: {
                                                    __typename: 'PullRequestConnection',
                                                    totalCount: 4,
                                                },
                                                description: null,
                                            },
                                        },
                                    ],
                                    __typename: 'RepositoryConnection',
                                },
                            },
                        } satisfies UnmaskedGetRepositoriesQuery,
                    },
                },
            ],
        },
    },

    args: {
        repoName: 'demo-repo',
        userName: 'login',
    },
});
