import { Meta, StoryObj } from '@storybook/react';

import Repo from './Repo';

const meta: Meta<typeof Repo> = {
    component: Repo,
};

export default meta;

type Story = StoryObj<typeof Repo>;

export const FakeData: Story = {
    args: {
        repoName: 'demo-repo',
        userName: 'owner',
    },
};
