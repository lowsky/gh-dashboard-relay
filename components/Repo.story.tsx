import { Meta, StoryObj } from '@storybook/react';

import Repo from './Repo';
import { WithAvatar } from './User.story';
import { WithOneBranch } from 'container/BranchesTable.story';

const meta: Meta<typeof Repo> = {
    component: Repo,
};

export default meta;

type Story = StoryObj<typeof Repo>;

export const FakeData: Story = {
    args: {
        repo: {
            ...WithOneBranch.args!.repo,
            owner: WithAvatar.args!.user,
            name: 'demo-repo',
        },
    },
};
