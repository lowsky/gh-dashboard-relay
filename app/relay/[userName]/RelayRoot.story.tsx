import preview from '../../../.storybook/preview';

import RelayRoot from './RelayRoot';
import type { RepoListFragment_repo$data } from 'relay/__generated__/RepoListFragment_repo.graphql';
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
                    //' $fragmentType': "UserFragment_user",
                    //' $fragmentType': 'RepoListFragment_user',
                    repositories: {
                        totalCount: 1,
                        pageInfo: { endCursor: 'undefined' },
                        edges: [
                            {
                                node: {
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
