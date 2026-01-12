import { Spinner } from './Spinner';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
    component: Spinner,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
