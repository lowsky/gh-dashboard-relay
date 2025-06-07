import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Status } from './Status';

import moreStatus from './lastCommitMock.json';

const meta: Meta<typeof Status> = {
    component: Status,
};

export default meta;

type Story = StoryObj<typeof Status>;

export const Default: Story = {
    args: {
        ...moreStatus.status[0],
    },
};
