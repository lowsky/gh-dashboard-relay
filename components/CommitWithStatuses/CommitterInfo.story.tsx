import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CommitterInfo } from './CommitterInfo';

import moreStatus from './lastCommitMock.json';

const meta = {
    component: CommitterInfo,
} satisfies Meta<typeof CommitterInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithData: Story = {
    args: {
        author: moreStatus.author,
    },
};
