import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NavBar } from './NavBar';

const meta = {
    component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
