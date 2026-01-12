import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import User from './User';

const meta = {
    component: User,
} satisfies Meta<typeof User>;

export default meta;

type Story = StoryObj<typeof meta>;

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
            ...WithoutAvatar.args.user,
            avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
};
