import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';

import User from '../components/User';

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
    title: 'User',
    decorators: [jsxDecorator],
};

export const WithoutAvatar = () => <User user={userWithoutAvatar} />;

export const WithAvatar = () => <User user={userWithAvatar} />;

WithoutAvatar.story = {
    name: 'without avatar',
};

WithAvatar.story = {
    name: 'with avatar',
};
