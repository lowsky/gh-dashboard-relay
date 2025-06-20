import { Meta, StoryObj } from '@storybook/nextjs';

import { UserRepoPageContent } from '../app/relay/[userName]/[repoName]/RelayRoot';
import { RepoWithBranchListFragment_repo$data } from '../app/relay/[userName]/[repoName]/__generated__/RepoWithBranchListFragment_repo.graphql';
import { UserFragment_user$data } from '../relay/__generated__/UserFragment_user.graphql';
import { WithInfo } from './BranchInfoRow.story';
//Later: import { Default } from '../not-yet/relay/PullRequestInfo.story';
import { relayDecorator } from '../relay/relayDecorator';

const meta: Meta<typeof UserRepoPageContent> = {
    component: UserRepoPageContent,
    decorators: [relayDecorator],
};
export default meta;

type Story = StoryObj<typeof UserRepoPageContent>;

export const WithUserAndRepo: Story = {
    parameters: {
        mockResolvers: {
            Ref: WithInfo.parameters!.mockResolvers.Ref,
            //Later: PullRequest: Default.parameters!.mockResolvers.PullRequest,
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
