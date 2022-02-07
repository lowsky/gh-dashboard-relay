import React from 'react';

import BranchInfoRow from '../container/BranchInfoRow';
import UILibContext from '../components/UILibContext';
import { UILibPureComponents } from '../components';

import { WithData } from '../components/CommitWithStatuses.story';
import { Default as DefaultPR } from '../components/PullRequestInfo.story';

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

WithInfo.args = {
    branch: {
        name: 'branch-x',
        lastCommit: {
            ...WithData.args.commit,
            associatedPullRequests: [
                {
                    ...DefaultPR.args.pullRequest,
                },
            ],
        },
    },
};
