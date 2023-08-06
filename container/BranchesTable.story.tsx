import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import BranchesTable from './BranchesTable';

import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from "components/UILibPureComponents";

import { WithInfo } from './BranchInfoRow.story';

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
