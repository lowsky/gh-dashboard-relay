import { Meta, StoryObj } from '@storybook/nextjs';

import { CommitterInfo } from './CommitterInfo';

import moreStatus from './lastCommitMock.json';

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
