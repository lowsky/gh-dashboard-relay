import { Meta, StoryObj } from '@storybook/nextjs-vite';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from './lastCommitMock.json';

const meta: Meta<typeof CommitWithStatuses> = {
    component: CommitWithStatuses,
};

export default meta;

type Story = StoryObj<typeof CommitWithStatuses>;

export const WithData: Story = {
    args: {
        // @ts-expect-error neeeds further adoption: not matching data
        commit: moreStatus,
    },
};

export const WithNoData: Story = {
    args: {
        // empty, intentionally
        commit: {
            abbreviatedOid: '',
            author: undefined,
            authoredDate: undefined,
            commitUrl: undefined,
            message: '',
            oid: undefined,
            status: undefined,
            ' $fragmentType': 'CommitWithStatuses_commit',
        },
    },
};
