import preview from '../../../../.storybook/preview';

import { UserRepoPageContent } from './RelayRoot';
import type { RepoWithBranchListFragment_repo$data } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import type { UserFragment_user$data } from 'relay/__generated__/UserFragment_user.graphql';
import { WithInfo } from 'relay/BranchInfoRow.story';
import { WithOneBranch } from 'relay/BranchesTable.story';

const meta = preview.meta({
    component: UserRepoPageContent,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const WithUserAndRepo = meta.story({
    parameters: {
        mockResolvers: {
            Ref: WithInfo.composed.parameters.mockResolvers.Ref,
            PullRequest: WithOneBranch.composed.parameters.mockResolvers.PullRequest,
            Commit: WithInfo.composed.parameters.mockResolvers.Commit,
            Repository: (): RepoWithBranchListFragment_repo$data => ({
                branches: {
                    edges: [
                        {
                            node: {
                                ' $fragmentSpreads': {
                                    BranchInfoRowFragment_ref: true,
                                },
                            },
                        },
                    ],
                },
                id: '1234',
                ' $fragmentType': 'RepoWithBranchListFragment_repo',
            }),
            User: ({ args }): UserFragment_user$data => {
                return {
                    company: 'company',
                    login: args.login,
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
                    ' $fragmentType': 'UserFragment_user',
                };
            },
        },
    },
    args: {
        repoName: 'demo-repo',
        userName: 'login',
    },
});
