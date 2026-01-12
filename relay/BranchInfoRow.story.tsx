import { Decorator, Meta, StoryObj } from '@storybook/nextjs-vite';
import { Table } from '@chakra-ui/react';
import { graphql } from 'relay-runtime';

import { relayDecorator, WithRelayParameters } from './relayDecorator';

import BranchInfoRow from 'relay/BranchInfoRowFragment';
import { Default } from 'relay/PullRequestMergeFragment.story';
import {
    BranchInfoRowFragment_ref$data,
    BranchInfoRowFragment_ref$key,
} from './__generated__/BranchInfoRowFragment_ref.graphql';
import { CommitWithStatuses_commit$data, StatusState } from './__generated__/CommitWithStatuses_commit.graphql';
import { BranchInfoRowStoryQuery } from './__generated__/BranchInfoRowStoryQuery.graphql';

import moreStatus from '../components/CommitWithStatuses/lastCommitMock.json';

const wrapInTableDecorator: Decorator = (Story) => (
    <Table.Root size="sm" striped>
        <Table.Body>
            <Story />
        </Table.Body>
    </Table.Root>
);

const meta = {
    component: BranchInfoRow,
    decorators: [relayDecorator, wrapInTableDecorator],
} satisfies Meta<typeof BranchInfoRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithInfo = {
    // to satisfy the Story type
    args: {
        branch: {
            ' $fragmentSpreads': {
                BranchInfoRowFragment_ref: true,
            },
        } satisfies BranchInfoRowFragment_ref$key, // could be empty, not relevant for rendering
    },
    parameters: {
        query: graphql`
            query BranchInfoRowStoryQuery @relay_test_operation {
                node(id: "test-id") {
                    ... on Ref {
                        ...BranchInfoRowFragment_ref
                    }
                }
            }
        `,
        getReferenceEntry: (q) => ['branch', q.node],
        mockResolvers: {
            Commit: (): CommitWithStatuses_commit$data => ({
                ...moreStatus,
                message: 'Merge pull request #1234 from lowsky/a-new-feature',
                author: {
                    user: {
                        login: 'lowsky',
                        name: 'name-mock',
                        avatarUrl: 'https://avatars2.githubusercontent.com/u/217931',
                    },
                },

                status: {
                    commit: {
                        oid: 'mock-oid',
                    },
                    contexts: moreStatus.status.map((status) => ({
                        avatarUrl: status.avatarUrl,
                        context: status.context,
                        creator: null,
                        description: status.description,
                        state: status.state as StatusState,
                        targetUrl: status.target_url,
                    })),
                    id: 'mock-status-id',
                    state: 'SUCCESS' as StatusState,
                },
                ' $fragmentType': 'CommitWithStatuses_commit',
            }),
            PullRequest: Default.parameters.mockResolvers.PullRequest,
            Ref: (): BranchInfoRowFragment_ref$data => ({
                name: 'branch-x',
                target: {
                    ' $fragmentSpreads': {
                        CommitWithStatuses_commit: true,
                    },
                },
                associatedPullRequests: {
                    edges: [
                        // have at least one entry:
                        // it will be replaced by the PR mock above
                        {
                            node: {
                                id: 'abc',
                                ' $fragmentSpreads': {
                                    PullRequestMergeFragment_ref: true,
                                },
                            },
                        },
                    ],
                },
                ' $fragmentType': 'BranchInfoRowFragment_ref',
            }),
        },
    } satisfies WithRelayParameters<BranchInfoRowStoryQuery>,
} satisfies Story;
