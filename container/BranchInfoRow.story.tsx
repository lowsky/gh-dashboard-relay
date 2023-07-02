import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';

import BranchInfoRow from 'container/BranchInfoRow';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components';

import { WithData } from 'components/CommitWithStatuses.story';
import { Default as DefaultPR } from 'components/PullRequestInfo.story';

export default {
    component: BranchInfoRow,
};

export const WithInfo = (props) => (
    <UILibContext.Provider value={UILibPureComponents}>
        <Table size="sm" variant="striped">
            <Tbody>
                <BranchInfoRow {...props} />
            </Tbody>
        </Table>
    </UILibContext.Provider>
);

WithInfo.args = {
    branch: {
        name: 'branch-x',
        lastCommit: {
            // @ts-expect-error exported args could be undefined
            ...WithData.args.commit,
            associatedPullRequests: [
                {
                    // @ts-expect-error exported args could be undefined
                    ...DefaultPR.args.pullRequest,
                },
            ],
        },
    },
};
