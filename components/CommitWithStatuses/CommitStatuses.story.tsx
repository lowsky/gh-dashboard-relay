import { Meta, StoryObj } from '@storybook/react';

import moreStatus from 'components/CommitWithStatuses/lastCommitMock.json';
import { CommitStatuses } from './CommitStatuses';

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
