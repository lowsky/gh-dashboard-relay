import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Repo from '../relay/Repo';

const meta = {
    component: Repo,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const FakeData: Story = {
    args: {
        repoName: 'demo-repo',
        userName: 'login',
    },
};
