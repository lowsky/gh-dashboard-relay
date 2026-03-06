import preview from '../../../../.storybook/preview';

import RelayRoot from './RelayRoot';
import { WithInfo } from 'relay/BranchInfoRow.story';
import { WithAvatar } from 'relay/UserFragment.story';
import type { RepoListFragment_repo$data } from 'relay/__generated__/RepoListFragment_repo.graphql';
import { WithOneBranch } from 'relay/BranchesTable.story';

const meta = preview.meta({
    title: 'relay/repo page',
    component: RelayRoot,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const Default = meta.story({
    args: { authToken: 'not used' },
    parameters: {
        mockResolvers: {
            // the branch itself is of type "Ref":
            Ref: WithInfo.parameters.mockResolvers.Ref,
            PullRequest: WithOneBranch.composed.parameters.mockResolvers.PullRequest,
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
            User: WithAvatar.parameters.mockResolvers.User,
        },
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/restful/lowsky/test-repo',
                segments: [
                    ['userName', 'lowsky'],
                    ['repoName', 'test-repo'],
                ],
                query: {
                    userName: 'lowsky',
                    repoName: 'test-repo',
                },
            },
        },
    },
});
