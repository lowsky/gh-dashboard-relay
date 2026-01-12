import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { relayDecorator } from 'relay/relayDecorator';

import RelayRoot from './RelayRoot';
import type { RepoListFragment_repo$data } from 'relay/__generated__/RepoListFragment_repo.graphql';
import type { RepoListFragment_user$data } from 'relay/__generated__/RepoListFragment_user.graphql';
import type { UserFragment_user$data } from 'relay/__generated__/UserFragment_user.graphql';

const meta = {
    title: 'relay/user page',
    component: RelayRoot,
    decorators: [relayDecorator],
    tags: ['skipTesting', '!autodocs'],
} satisfies Meta<typeof RelayRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: { authToken: 'not used' },
    parameters: {
        mockResolvers: {
            Repository: () =>
                ({
                    id: '1234',
                    name: 'test-repo',
                    nameWithOwner: 'lowsky/test-repo',
                    url: 'https://github.com/lowsky/test-repo',
                    isFork: true,
                    pullRequests: {
                        totalCount: 2,
                    },
                    ' $fragmentType': 'RepoListFragment_repo',
                }) satisfies RepoListFragment_repo$data,
            User: () =>
                ({
                    login: 'login',
                    company: 'company',
                    avatarUrl: 'avatarUrl',
                    id: 'owner',
                    // TODO, research an improved solution:
                    // conflict: it would need to be used for both types:
                    // may require checking the requested types/fragments??
                    //' $fragmentType': "UserFragment_user",
                    //' $fragmentType': 'RepoListFragment_user',
                    repositories: {
                        totalCount: 1,
                        edges: [
                            {
                                node: {
                                    ' $fragmentSpreads': {
                                        // see mock above
                                        RepoListFragment_repo: true,
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
} satisfies Story;
