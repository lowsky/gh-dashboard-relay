import preview from '../.storybook/preview';

import Repo from './Repo';

const meta = preview.meta({
    component: Repo,
});

export default meta;

export const FakeData = meta.story({
    args: {
        repoName: 'demo-repo',
        userName: 'login',
    },
});
