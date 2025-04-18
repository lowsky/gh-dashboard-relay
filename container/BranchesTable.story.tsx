import { Meta, StoryObj } from '@storybook/react';

import BranchesTable from './BranchesTable';

import { WithInfo } from './BranchInfoRow.story';

import { GithubBranch, Maybe } from '../restinpeace/types';

const meta: Meta<typeof BranchesTable> = {
    component: BranchesTable,
};
export default meta;

type Story = StoryObj<typeof BranchesTable>;

export const WithOneBranch: Story = {
    args: {
        repo: {
            branches: [WithInfo.args!.branch as Maybe<GithubBranch>],
        },
    },
};
