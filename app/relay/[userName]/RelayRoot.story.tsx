import preview from '../../../.storybook/preview';

import RelayRoot from './RelayRoot';
import type { RepoListFragment_user$data } from 'relay/__generated__/RepoListFragment_user.graphql';
import type { UserFragment_user$data } from 'relay/__generated__/UserFragment_user.graphql';

const meta = preview.meta({
    title: 'relay/user page',
    component: RelayRoot,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const Default = meta.story({
    args: { authToken: 'not used' },
    parameters: {
        mockResolvers: {
            User: () =>
                ({
                    // UserFragment_user$data
                    //' $fragmentType': 'UserFragment_user',
                    login: 'lowsky',
                    company: 'company',
                    avatarUrl: 'avatarUrl',

                    // RepoListFragment_user$data
                    //' $fragmentType': 'RepoListFragment_user',
                    id: 'lowsky',
                    repositories: {
                        totalCount: 1,
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: 'undefined',
                        },
                        edges: [
                            {
                                node: {
                                    id: 'repo',
                                    ' $fragmentSpreads': {
                                        RepoItemFragment_repo: true,
                                    },
                                },
                            },
                        ],
                    },
                }) satisfies Partial<RepoListFragment_user$data | UserFragment_user$data>,
            // Fragment used in the list above
            Repository: () => {
                return {
                    id: '123',
                    isFork: true,
                    name: 'repo',
                    nameWithOwner: 'lowsky/repo',
                    pullRequests: {
                        totalCount: 3,
                    },
                    ' $fragmentType': 'RepoItemFragment_repo',
                };
            },
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/relay/lowsky',
                segments: [['userName', 'lowsky']],
                query: {
                    userName: 'lowsky',
                },
            },
        },
    },
});
export const WithForks = Default.extend({
    play: async (context) => {
        context.canvas.getByTestId('fork-toggle').click();
    },
});
