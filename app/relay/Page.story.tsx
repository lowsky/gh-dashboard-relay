import preview from '../../.storybook/preview';

import IndexPage from './page.mdx';

const meta = preview.meta({
    title: 'relay/entry page',
    component: IndexPage,
    // next/mdx rendering can not be tested, and it is only a static page
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const Default = meta.story({
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/relay',
            },
        },
    },
});
