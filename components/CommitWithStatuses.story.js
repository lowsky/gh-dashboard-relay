import React from 'react';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from '../restinpeace/lastCommitMock';

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

export default {
    title: 'Others/CommitStatus',
    component: CommitWithStatuses,
};

export const WithData = () => <CommitWithStatuses commit={moreStatus} user={commitData.user} />;

export const WithNoData = () => <CommitWithStatuses />;

WithData.storyName = 'with data';

WithNoData.storyName = 'with no data';
