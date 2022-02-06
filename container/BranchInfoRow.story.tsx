import React from 'react';

import BranchInfoRow from '../container/BranchInfoRow';
import UILibContext from '../components/UILibContext';
import { UILibPureComponents } from '../components';
import { commitData } from '../components/CommitWithStatuses.story';
import { pullRequestData_default } from '../components/PullRequestInfo.story';

export const branchInfo_data = {
    branch: {
        name: 'branch-x',
        lastCommit: {
            ...commitData.commit,
            associatedPullRequests: [
                {
                    ...pullRequestData_default
                },
            ],
        },
    },
};

export default {
    title: 'Others/BranchInfoRow',
    component: BranchInfoRow,
};

export const WithInfo = (props) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <table width={400}>
            <tbody>
                <BranchInfoRow {...props} />
            </tbody>
        </table>
    </UILibContext.Provider>
);

WithInfo.args = { ...branchInfo_data };
