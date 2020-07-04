import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';
import BranchInfoRow from '../container/BranchInfoRow';

const userWithoutAvatar = {
    login: 'login',
    id: '1234',
    company: 'company',
};
const userWithAvatar = {
    ...userWithoutAvatar,
    avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
};

const commitData = {
    user: {
        ...userWithoutAvatar,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
    commit: {
        sha: 'no-sha',
        date: 'no-date',
        message: 'no-message',
        status: [],
        author: {
            ...userWithAvatar.user,
            email: 'me@work',
            name: 'My-Name',
        },
    },
};

const branchInfo = {
    branch: {
        name: 'branch-x',
        lastCommit: commitData.commit,
    },
};

export default {
    title: 'BranchInfoRow',
    decorators: [jsxDecorator],
};

export const WithInfo = () => <BranchInfoRow {...branchInfo} />;

WithInfo.story = {
    name: 'with info',
};
