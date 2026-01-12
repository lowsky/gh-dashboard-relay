import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CommitStatuses } from './CommitStatuses';

import moreStatus from './lastCommitMock.json';

const meta: Meta<typeof CommitStatuses> = {
    component: CommitStatuses,
} satisfies Meta<typeof CommitStatuses>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
    args: {
        statuses: moreStatus.status,
    },
};

export const WithNoData: Story = {
    args: {},
};
