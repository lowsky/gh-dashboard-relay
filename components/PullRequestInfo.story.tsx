import React from 'react';

import PullRequestInfo, { PullRequestData } from './PullRequestInfo';

export default {
    component: PullRequestInfo,
};

const pullRequestData_default: PullRequestData = {
    url: 'https://github.com/lowsky/dashboard/pull/42',
    title: 'add PR info to branch table',
    number: 42,
};

export const Default = (props) => <PullRequestInfo {...props} />;

Default.args = {
    pullRequest: pullRequestData_default,
};
