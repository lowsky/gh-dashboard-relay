import { Meta } from '@storybook/nextjs';

import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    component: NavBar,
};

export default meta;

type Story = Meta<typeof NavBar>;

export const Default: Story = {
    args: {},
};
