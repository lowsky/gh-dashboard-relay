import { Spinner } from './Spinner';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Spinner> = {
    component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {},
};
