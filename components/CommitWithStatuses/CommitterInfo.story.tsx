import { Meta, StoryObj } from '@storybook/react';

import moreStatus from 'restinpeace/lastCommitMock.json';
import { CommitterInfo } from './CommitterInfo';

const meta: Meta<typeof CommitterInfo> = {
    component: CommitterInfo,
};

export default meta;

type Story = StoryObj<typeof CommitterInfo>;

export const WithData: Story = {
    args: {
        author: moreStatus.author,
    },
};

export const WithNoData: Story = {
    args: {},
};
