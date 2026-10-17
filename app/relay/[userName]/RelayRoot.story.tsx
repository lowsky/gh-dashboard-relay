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
                    login: 'login1',
                    company: 'company1',
                    avatarUrl: 'avatarUrl',

                    // RepoListFragment_user$data
                    //' $fragmentType': 'RepoListFragment_user',
                    id: 'owner1',
                    //' $fragmentType': "UserFragment_user",
                    //' $fragmentType': 'RepoListFragment_user',
                    repositories: {
                        totalCount: 2,
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: 'undefined',
                        },
                        edges: [
                            {
                                node: {
                                    id: 'repo1',
                                    ' $fragmentSpreads': {
                                        RepoItemFragment_repo: true,
                                    },
                                },
                            },
                        ],
                    },
                }) satisfies Partial<RepoListFragment_user$data | UserFragment_user$data>,
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
