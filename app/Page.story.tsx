import { Meta, StoryObj } from '@storybook/nextjs-vite';

import IndexPage from './page.mdx';

const meta = {
    component: IndexPage,
    tags: ['skipTesting', '!autodocs'],
} satisfies Meta<typeof IndexPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
            },
        },
    },
};
