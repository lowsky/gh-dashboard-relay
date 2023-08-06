import { Meta, StoryObj } from '@storybook/react';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from 'restinpeace/lastCommitMock.json';

const meta: Meta<typeof CommitWithStatuses> = {
    component: CommitWithStatuses,
};

export default meta;

type Story = StoryObj<typeof CommitWithStatuses>;

export const WithData: Story = {
    args: {
        commit: moreStatus,
    },
};

export const WithNoData: Story = {
    args: {
        commit: undefined,
    },
};
