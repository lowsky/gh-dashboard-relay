import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { UserRepoPageContent } from '../app/relay/[userName]/[repoName]/RelayRoot';
import { RepoWithBranchListFragment_repo$data } from '../app/relay/[userName]/[repoName]/__generated__/RepoWithBranchListFragment_repo.graphql';
import { UserFragment_user$data } from './__generated__/UserFragment_user.graphql';
import { WithInfo } from './BranchInfoRow.story';
import { WithOneBranch } from './BranchesTable.story';

import { relayDecorator } from './relayDecorator';

const meta = {
    component: UserRepoPageContent,
    decorators: [relayDecorator],
} satisfies Meta<typeof UserRepoPageContent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithUserAndRepo: Story = {
    parameters: {
        mockResolvers: {
            Ref: WithInfo.parameters!.mockResolvers.Ref,
            //Later:
            //PullRequest: Default.parameters!.mockResolvers.PullRequest,
            //PullRequest:
            PullRequest: WithOneBranch.parameters.mockResolvers.PullRequest,
            /*
                mergeStateStatus: 'CLEAN',
                number: 423,
                mergeable: 'MERGEABLE',
                title: 'add PR info to branch table',
                url: 'https://github.com/lowsky/dashboard/pull/42',
                headRefOid: {
                    id: '72b14d30d',
                },
                id: '72b14d30d',
                closed: false,
                isDraft: false,
                isInMergeQueue: false,
                ' $fragmentType': 'PullRequestMergeFragment_ref',
            }),

             */
            Commit: WithInfo.parameters!.mockResolvers.Commit,
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
};
