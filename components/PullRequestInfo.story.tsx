import PullRequestInfo from './PullRequestInfo';

import { ComponentMeta, StoryObj } from '@storybook/react';

export default {
    component: PullRequestInfo,
} as ComponentMeta<typeof PullRequestInfo>;

type Story = StoryObj<typeof PullRequestInfo>;

export const Default: Story = {
    args: {
        pullRequest: {
            url: 'https://github.com/lowsky/dashboard/pull/42',
            title: 'add PR info to branch table',
            number: 42,
        },
    },
};
