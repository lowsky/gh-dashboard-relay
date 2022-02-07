import React from 'react';

import BranchesTable from './BranchesTable';

import { UILibPureComponents } from '../components';

import UILibContext from '../components/UILibContext';
import { WithInfo } from './BranchInfoRow.story';

export default {
    title: 'Others/BranchesTable',
    component: BranchesTable,
};

export const WithOneBranch = (props) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <BranchesTable {...props} />
    </UILibContext.Provider>
);

WithOneBranch.args = {
    repo: {
        branches: [
            {
                ...WithInfo.args.branch,
            },
        ],
    },
};
