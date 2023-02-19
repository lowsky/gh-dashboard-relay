import { ComponentMeta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
