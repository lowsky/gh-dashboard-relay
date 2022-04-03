import React from 'react';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from '../restinpeace/lastCommitMock.json';
import { WithoutAvatar } from './User.story';

export default {
    component: CommitWithStatuses,
};

export const WithData = (props) => <CommitWithStatuses {...props} />;

WithData.args = {
    commit: moreStatus,
    user: {
        ...WithoutAvatar.args.user,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
};

export const WithNoData = (props) => <CommitWithStatuses {...props} />;

WithNoData.args = {
    commit: undefined,
    user: undefined,
};
