import preview from '../.storybook/preview';

import User from './User';

const meta = preview.meta({
    component: User,
});

export default meta;

export const WithoutAvatar = meta.story({
    args: {
        user: {
            login: 'login',
            company: 'company',
        },
    },
});

export const WithAvatar = meta.story({
    args: {
        user: {
            ...WithoutAvatar.composed.args,
            avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
});
