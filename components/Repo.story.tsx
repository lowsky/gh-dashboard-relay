import React from 'react';

import Repo from './Repo';
import { WithAvatar } from './User.story';
import { WithOneBranch } from '../container/BranchesTable.story';

export default {
    title: 'Others/Repo',
    component: Repo,
};

export const FakeData = (props) => <Repo {...props} />;

FakeData.args = {
    repo: {
        owner: WithAvatar.args.user,
        name: 'demo-repo',
        ...WithOneBranch.args.repo,
    },
};
