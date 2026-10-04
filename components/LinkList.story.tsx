import { expect } from 'storybook/test';

import preview from '../.storybook/preview';

import { LinkList } from './LinkList';

const meta = preview.meta({
    component: LinkList,
    args: { rootPath: '/relay' },
});

export default meta;

export const Default = meta.story({
    play: async ({ canvas }) => {
        await expect(await canvas.findByRole('heading', { name: 'Some example repos:' })).toBeVisible();
        await expect(canvas.getByRole('link', { name: 'lowsky/gh-dashboard-relay', exact: true })).toHaveAttribute(
            'href',
            '/relay/lowsky/gh-dashboard-relay'
        );
        // The story must supply rootPath, otherwise links silently start with "undefined/".
        for (const link of canvas.getAllByRole('link')) {
            await expect(link.getAttribute('href')).toMatch(/^\/relay\//);
        }
    },
});
