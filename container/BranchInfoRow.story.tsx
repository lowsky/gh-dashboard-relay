import React from 'react';
import { Decorator, Meta, StoryObj } from '@storybook/react';
import { Table } from '@chakra-ui/react';

import BranchInfoRow from 'container/BranchInfoRow';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components/UILibPureComponents';

import { WithData as CommitWithDataStory } from 'components/CommitWithStatuses/CommitWithStatuses.story';
import { Default as DefaultPRStory } from 'components/PullRequestInfo.story';

const wrapInTableBody = (story) => (
    <Table.Root size="sm" striped>
        <Table.Body>{story()}</Table.Body>
    </Table.Root>
);

const wrapInPureUILib: Decorator = (story) => (
    <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>
);

const meta: Meta<typeof BranchInfoRow> = {
    component: BranchInfoRow,
    decorators: [wrapInTableBody, wrapInPureUILib],
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
};
