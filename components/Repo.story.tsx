import { Meta, StoryObj } from '@storybook/nextjs-vite';

import Repo from '../relay/Repo';

const meta: Meta<typeof Repo> = {
    component: Repo,
};

export default meta;

type Story = StoryObj<typeof Repo>;

export const FakeData: Story = {
    args: {
        repoName: 'demo-repo',
        userName: 'login',
    },
};
