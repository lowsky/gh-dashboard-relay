import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { graphql } from 'relay-runtime';
import { MockResolver, MockResolvers } from 'relay-test-utils';

import { relayDecorator, WithRelayParameters } from './relayDecorator';

import PullRequestMerge from 'relay/PullRequestMerge';
import { PullRequestMergeFragmentStoryQuery } from './__generated__/PullRequestMergeFragmentStoryQuery.graphql';
import { PullRequestMergeFragment_ref$data } from 'relay/__generated__/PullRequestMergeFragment_ref.graphql';

const prMock = {
    ' $fragmentType': 'PullRequestMergeFragment_ref',
    number: 423,
    title: 'add PR info to branch table',
    url: 'https://github.com/lowsky/dashboard/pull/42',
    headRefOid: {
        id: '72b14d30d',
    },
    id: '72b14d30d',
    closed: false,
    isDraft: false,
    mergeStateStatus: 'CLEAN',
    mergeable: 'MERGEABLE',
    merged: false,
} satisfies PullRequestMergeFragment_ref$data;

// experimental approach for additional type-safety on resolvers
type MockResolvers2 = MockResolvers<{ PullRequest: MockResolver<PullRequestMergeFragment_ref$data> }>;

const meta: Meta<typeof PullRequestMerge> = {
    component: PullRequestMerge,
    decorators: [relayDecorator],
    parameters: {
        query: graphql`
            query PullRequestMergeFragmentStoryQuery @relay_test_operation {
                node(id: "pr-id") {
                    ... on PullRequest {
                        ...PullRequestMergeFragment_ref
                    }
                }
            }
        `,
        getReferenceEntry: (q) => ['associatedPullRequest', q.node],
        mockResolvers: {
            PullRequest: () => prMock,
        },
    } satisfies WithRelayParameters<PullRequestMergeFragmentStoryQuery, MockResolvers2>,
};

export default meta;

type Story = StoryObj<typeof PullRequestMerge>;

export const Default: Story = {};

export const Merged: Story = {
    parameters: {
        mockResolvers: {
            PullRequest: (): PullRequestMergeFragment_ref$data => ({
                ...prMock,
                mergeStateStatus: 'UNKNOWN',
                mergeable: 'UNKNOWN',
                merged: true,
            }),
        } satisfies MockResolvers2,
    },
};

export const Draft: Story = {
    parameters: {
        mockResolvers: {
            PullRequest: (): PullRequestMergeFragment_ref$data => ({
                ...prMock,
                mergeStateStatus: 'DRAFT',
                mergeable: 'UNKNOWN',
                isDraft: true,
            }),
        } satisfies MockResolvers2,
    },
};
