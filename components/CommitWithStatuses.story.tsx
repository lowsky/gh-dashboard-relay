import { ComponentMeta, StoryObj } from '@storybook/react';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from 'restinpeace/lastCommitMock.json';

export default {
    component: CommitWithStatuses,
} as ComponentMeta<typeof CommitWithStatuses>;

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
