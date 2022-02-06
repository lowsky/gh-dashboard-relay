import React from 'react';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from '../restinpeace/lastCommitMock.json';
import { WithAvatar, WithoutAvatar } from './User.story';

export default {
    title: 'Others/CommitStatus',
    component: CommitWithStatuses,
};

export const WithData = (props) => <CommitWithStatuses  {...props} />;

WithData.args = {
    commit: moreStatus,
    user:({
        user: {
            ...WithoutAvatar.args.user,
            avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
        },
        commit: {
            sha: 'no-sha',
            date: 'no-date',
            message: 'no-message',
            status: [],
            author: {
                ...WithAvatar.args.user,
                email: 'me@work',
                name: 'My-Name',
            },
        },
    } as const).user
}

export const WithNoData = (props) => <CommitWithStatuses {...props} />;

WithNoData.args = {
    commit: undefined,
    user: undefined
}
