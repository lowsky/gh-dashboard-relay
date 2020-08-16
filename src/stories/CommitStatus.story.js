import React from 'react';

import CommitWithStatuses from '../components/CommitWithStatuses';

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

const moreStatus = require('../restinpeace/lastCommitMock');

export default {
    title: 'Others/CommitStatus',
    component: CommitWithStatuses,
};

export const WithData = () => <CommitWithStatuses commit={moreStatus} user={commitData.user} />;

export const WithNoData = () => <CommitWithStatuses />;

WithData.story = {
    name: 'with data',
};

WithNoData.story = {
    name: 'with no data',
};
