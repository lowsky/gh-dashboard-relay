import User from './User';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof User> = {
    component: User,
};

export default meta;

type Story = StoryObj<typeof User>;

export const WithoutAvatar: Story = {
    args: {
        user: {
            login: 'login',
            company: 'company',
        },
    },
};

export const WithAvatar: Story = {
    args: {
        user: {
            ...WithoutAvatar.args!.user,
            avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
};
