import React from 'react';

import Repo from './Repo';

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
        owner: userWithAvatar,
        name: 'demo-repo',
        branches: branches.repo.branches,
    },
};

export default {
    title: 'Others/Repo',
    component: Repo,
};

export const FakeData = (props) => <Repo {...props} />;
FakeData.args = {
    repo: repo.repo
}

FakeData.storyName = 'fake data';
