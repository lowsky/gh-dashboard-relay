import preview from '../.storybook/preview';

import User from './User';

const meta = preview.meta({
    component: User,
});

export default meta;

const userWithoutAvatar = {
    user: {
        login: 'login',
        company: 'company',
    },
};

export const WithoutAvatar = meta.story({
    args: userWithoutAvatar,
});

export const WithAvatar = meta.story({
    args: {
        user: {
            ...userWithoutAvatar.user,
            avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
});
