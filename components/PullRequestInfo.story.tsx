import PullRequestInfo from './PullRequestInfo';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PullRequestInfo> = {
    component: PullRequestInfo,
};

export default meta;

type Story = StoryObj<typeof PullRequestInfo>;

export const Default: Story = {
    args: {
        pullRequest: {
            html_url: 'https://github.com/lowsky/dashboard/pull/42',
            title: 'add PR info to branch table',
            number: 42,
        },
        sha: '72b14d30d',
    },
};
