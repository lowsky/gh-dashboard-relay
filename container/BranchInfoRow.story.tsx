import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';

import BranchInfoRow from 'container/BranchInfoRow';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components';

import { WithData } from 'components/CommitWithStatuses.story';
import { Default as DefaultPR } from 'components/PullRequestInfo.story';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BranchInfoRow> = {
    component: BranchInfoRow,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};
export default meta;

type Story = StoryObj<typeof BranchInfoRow>;

export const WithInfo: Story = {
    args: {
        branch: {
            name: 'branch-x',
            lastCommit: {
                ...WithData.args!.commit,
                associatedPullRequests: [
                    {
                        ...DefaultPR.args.pullRequest,
                    },
                ],
            },
        }
    },
    decorators: [
        (story) => (
            <Table size="sm" variant="striped">
                <Tbody>{story()}</Tbody>
            </Table>
        ),
    ],
};
