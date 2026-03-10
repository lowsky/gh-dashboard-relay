import { graphql } from 'relay-runtime';

import PullRequestMerge from 'relay/PullRequestMerge';
import preview from '../.storybook/preview';

import type {
    PullRequestMergeFragment_ref$data,
    PullRequestMergeFragment_ref$key,
} from 'relay/__generated__/PullRequestMergeFragment_ref.graphql';
import type { PullRequestMergeFragmentStoryQuery } from './__generated__/PullRequestMergeFragmentStoryQuery.graphql';
import type { WithRelayParameters } from 'relay/storybook/relayDecorator';

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
} satisfies PullRequestMergeFragment_ref$data; // required for typing $fragmentType

const meta = preview.meta({
    component: PullRequestMerge,
    args: {
        associatedPullRequest: {
            ' $fragmentSpreads': {
                PullRequestMergeFragment_ref: true,
            },
        } satisfies PullRequestMergeFragment_ref$key, // required! {} would not be sufficient
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
    } satisfies WithRelayParameters<PullRequestMergeFragmentStoryQuery>,
});

export default meta;

export const Default = meta.story({});

export const Merged = meta.story({
    args: {
        associatedPullRequest: {
            ' $fragmentSpreads': {
                PullRequestMergeFragment_ref: true,
            },
        }, //still needed? satisfies PullRequestMergeFragment_ref$key, // could be empty, not relevant for rendering
    },
    parameters: {
        mockResolvers: {
            PullRequest: () => ({
                ...prMock,
                mergeStateStatus: 'UNKNOWN',
                mergeable: 'UNKNOWN',
                merged: true,
            }),
        },
    },
});

export const Draft = meta.story({
    parameters: {
        mockResolvers: {
            PullRequest: (): PullRequestMergeFragment_ref$data => ({
                ...prMock,
                mergeStateStatus: 'DRAFT',
                mergeable: 'UNKNOWN',
                isDraft: true,
            }),
        },
    },
});
