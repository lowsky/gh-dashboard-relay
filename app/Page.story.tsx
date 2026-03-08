import preview from '../.storybook/preview';

import IndexPage from './page.mdx';

const meta = preview.meta({
    title: 'Main entry page',
    component: IndexPage,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const Default = meta.story({
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/',
            },
        },
    },
});
