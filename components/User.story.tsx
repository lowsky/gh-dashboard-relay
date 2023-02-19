import User from './User';

export default {
    component: User,
};

export const WithoutAvatar = {
    args: {
        user: {
            login: 'login',
            id: '1234',
            company: 'company',
        },
    },
};

export const WithAvatar = {
    args: {
        user: {
            ...WithoutAvatar.args.user,
            avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
    },
};
