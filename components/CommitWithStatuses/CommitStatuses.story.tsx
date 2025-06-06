import { Meta, StoryObj } from '@storybook/nextjs';

import { CommitStatuses } from './CommitStatuses';

import moreStatus from './lastCommitMock.json';

const meta: Meta<typeof CommitStatuses> = {
    component: CommitStatuses,
};

export default meta;

type Story = StoryObj<typeof CommitStatuses>;

export const WithData: Story = {
    args: {
        statuses: moreStatus.status,
    },
};

export const WithNoData: Story = {
    args: {},
};
