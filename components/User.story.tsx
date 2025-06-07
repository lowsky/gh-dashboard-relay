import { Meta, StoryObj } from '@storybook/nextjs-vite';
import User from './User';

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
            avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
};
