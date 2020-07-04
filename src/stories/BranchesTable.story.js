import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';
import BranchesTable from '../container/BranchesTable';

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
    name: 'branch-x',
    lastCommit: commitData.commit,
};

export default {
    title: 'BranchesTable',
    decorators: [jsxDecorator],
};

export const WithOneBranch = () => <BranchesTable repo={{ branches: [branchInfo] }} />;

WithOneBranch.story = {
    name: 'with one branch',
};
