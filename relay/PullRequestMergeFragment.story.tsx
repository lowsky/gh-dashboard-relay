import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { graphql } from 'relay-runtime';
import type { MockResolver, MockResolvers } from 'relay-test-utils';

import type { WithRelayParameters } from './relayDecorator';
import { relayDecorator } from './relayDecorator';

import PullRequestMerge from 'relay/PullRequestMerge';
import type { PullRequestMergeFragmentStoryQuery } from './__generated__/PullRequestMergeFragmentStoryQuery.graphql';
import type {
    PullRequestMergeFragment_ref$data,
    PullRequestMergeFragment_ref$key,
} from 'relay/__generated__/PullRequestMergeFragment_ref.graphql';

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

const meta = {
    component: PullRequestMerge,
    decorators: [relayDecorator],
    args: {
        associatedPullRequest: {
            ' $fragmentSpreads': {
                PullRequestMergeFragment_ref: true,
            },
        } satisfies PullRequestMergeFragment_ref$key, // could be empty, not relevant for rendering
    },
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
} satisfies Meta<typeof PullRequestMerge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    // Even while it is the same as in the meta area, it will be repeating here,
    // to make it re-usable in other stories
    parameters: {
        ...meta.parameters,
    },
} satisfies Story;

export const Merged = {
    args: {
        associatedPullRequest: {
            ' $fragmentSpreads': {
                PullRequestMergeFragment_ref: true,
            },
        } satisfies PullRequestMergeFragment_ref$key, // could be empty, not relevant for rendering
    },
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
} satisfies Story;

export const Draft = {
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
} satisfies Story;
