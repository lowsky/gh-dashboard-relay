import React from 'react';

import Repo from './Repo';
import { userWithAvatar } from './User.story';
import { branchInfo_data } from '../container/BranchInfoRow.story';

export const repo_data = {
    owner: userWithAvatar,
    name: 'demo-repo',
    branches: [branchInfo_data.branch],
} as const;

export default {
    title: 'Others/Repo',
    component: Repo,
};

export const FakeData = (props) => <Repo {...props} />;

FakeData.args = {
    repo: repo_data,
};
