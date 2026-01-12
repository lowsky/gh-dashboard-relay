import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Status } from './Status';

import moreStatus from './lastCommitMock.json';

const meta = {
    component: Status,
} satisfies Meta<typeof Status>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...moreStatus.status[0],
    },
};
