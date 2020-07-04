import React from 'react';

import { jsxDecorator } from 'storybook-addon-jsx';

import UserRepo from '../container/UserRepo';

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

const branches = {
    repo: { branches: [branchInfo.branch] },
};

const repo = {
    repo: {
        owner: userWithAvatar.user,
        name: 'demo-repo',
        branches: branches.repo.branches,
    },
};

const userRepo = {
    github: {
        user: userWithAvatar.user,
        repo: repo.repo,
    },
};

export default {
    title: 'UserRepo',
    decorators: [jsxDecorator],
};

export const WithUserAndRepo = () => <UserRepo {...userRepo} />;

WithUserAndRepo.story = {
    includeStories: ['SimpleStory', 'ComplexStory'],
};

WithUserAndRepo.story = {
    name: 'with user and repo',
};
