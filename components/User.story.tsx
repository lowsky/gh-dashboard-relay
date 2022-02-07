import React from 'react';

import User from './User';

const userWithoutAvatar = {
    login: 'login',
    id: '1234',
    company: 'company',
};

const userWithAvatar = {
    ...userWithoutAvatar,
    avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
};

export default {
    title: 'Others/User',
    component: User,
};

export const WithoutAvatar = (props) => <User {...props} />;

WithoutAvatar.args = {
    user: userWithoutAvatar,
};

export const WithAvatar = (props) => <User {...props} />;

WithAvatar.args = {
    user: userWithAvatar,
};
