import { Meta, StoryObj } from '@storybook/react';

import { graphql } from 'react-relay';
import PullRequestMerge from '../relay/PullRequestMerge';
import { relayDecorator, WithRelayParameters } from '../relay/relayDecorator';
import { PullRequestMergeFragment_ref$data } from '../relay/__generated__/PullRequestMergeFragment_ref.graphql';
import { PullRequestInfoStoryQuery } from './__generated__/PullRequestInfoStoryQuery.graphql';

const meta: Meta<typeof PullRequestMerge> = {
    component: PullRequestMerge,
    decorators: [relayDecorator],
};

export default meta;

type Story = StoryObj<typeof PullRequestMerge>;

export const Default: Story = {
    parameters: {
        query: graphql`
            query PullRequestInfoStoryQuery {
                node(id: "test-id") {
                    ...PullRequestMergeFragment_ref
                }
            }
        `,
        getReferenceEntry: (q) => ['associatedPullRequest', q.node],
        mockResolvers: {
            PullRequest: (): PullRequestMergeFragment_ref$data => ({
                mergeStateStatus: 'CLEAN',
                number: 423,
                mergeable: 'MERGEABLE',
                title: 'add PR info to branch table',
                url: 'https://github.com/lowsky/dashboard/pull/42',
                headRefOid: {
                    id: '72b14d30d',
                },
                closed: false,
                isDraft: false,
                isInMergeQueue: false,
                locked: false,
                merged: false,
                ' $fragmentType': 'PullRequestMergeFragment_ref',
            }),
        },
    } satisfies WithRelayParameters<PullRequestInfoStoryQuery>,
};
