import { Meta, StoryObj } from '@storybook/react';

import PullRequestInfo from '../relay/PullRequestInfo';

const meta: Meta<typeof PullRequestInfo> = {
    component: PullRequestInfo,
};

export default meta;

type Story = StoryObj<typeof PullRequestInfo>;

export const Default: Story = {
    args: {
        pullRequest: {
            ' $data': {
                number: 42,
                title: 'add PR info to branch table',
                url: 'https://github.com/lowsky/dashboard/pull/42',
                ' $fragmentType': 'PullRequestInfo_pullRequest',
                headRef: {
                    id: '72b14d30d',
                },
            },
            ' $fragmentSpreads': {
                PullRequestInfo_pullRequest: true,
            },
        },
    },
};
