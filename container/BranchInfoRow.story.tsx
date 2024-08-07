import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, Tbody } from '@chakra-ui/react';

import BranchInfoRow from 'container/BranchInfoRow';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components/UILibPureComponents';

import { WithData as CommitWithDataStory } from 'components/CommitWithStatuses/CommitWithStatuses.story';
import { Default as DefaultPRStory } from 'components/PullRequestInfo.story';

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
                ...CommitWithDataStory.args!.commit,
                associatedPullRequests: [
                    // @ts-expect-error missing head
                    {
                        ...DefaultPRStory.args!.pullRequest!,
                    },
                ],
            },
        },
    },
    decorators: [
        (story) => (
            <Table size="sm" variant="striped">
                <Tbody>{story()}</Tbody>
            </Table>
        ),
    ],
};
