import React from 'react';

import BranchesTable from './BranchesTable';

import { UILibPureComponents } from 'components';
import UILibContext from 'components/UILibContext';

import { WithInfo } from './BranchInfoRow.story';

import { Meta, StoryObj } from '@storybook/react';
import { GithubBranch, Maybe } from '../restinpeace/types';

const meta: Meta<typeof BranchesTable> = {
    component: BranchesTable,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
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
