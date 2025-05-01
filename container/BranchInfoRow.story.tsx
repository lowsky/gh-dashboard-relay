import React from 'react';
import { Decorator, Meta, StoryObj } from '@storybook/react';
import { Table } from '@chakra-ui/react';

import BranchInfoRow from 'relay/BranchInfoRowFragment';

import { WithData as CommitWithDataStory } from 'components/CommitWithStatuses/CommitWithStatuses.story';
import { Default as DefaultPRStory } from 'components/PullRequestInfo.story';

const wrapInTableDecorator: Decorator = (Story) => (
    <Table.Root size="sm" striped>
        <Table.Body>
            <Story />
        </Table.Body>
    </Table.Root>
);

const meta: Meta<typeof BranchInfoRow> = {
    component: BranchInfoRow,
    decorators: [wrapInTableDecorator],
};
export default meta;

type Story = StoryObj<typeof BranchInfoRow>;

export const WithInfo: Story = {
    args: {
        branch: {
            // @ts-expect-error temporary ignoring
            name: 'branch-x',
            lastCommit: {
                ...CommitWithDataStory.args!.commit,
                associatedPullRequests: [
                    {
                        ...DefaultPRStory.args!.pullRequest!,
                    },
                ],
            },
        },
    },
};
