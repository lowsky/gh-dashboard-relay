import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { graphql } from 'relay-runtime';

import { relayDecorator, WithRelayParameters } from './relayDecorator';

import PullRequestInfoFragment from 'relay/PullRequestInfo';
import { PullRequestInfoFragmentStoryQuery } from './__generated__/PullRequestInfoFragmentStoryQuery.graphql';
import { PullRequestInfo_pullRequest$data } from 'relay/__generated__/PullRequestInfo_pullRequest.graphql';

const meta: Meta<typeof PullRequestInfoFragment> = {
    component: PullRequestInfoFragment,
    decorators: [relayDecorator],
};
export default meta;

type Story = StoryObj<typeof PullRequestInfoFragment>;

export const Default: Story = {
    parameters: {
        query: graphql`
            query PullRequestInfoFragmentStoryQuery @relay_test_operation {
                node(id: "pr-id") {
                    ... on PullRequest {
                        ...PullRequestInfo_pullRequest
                    }
                }
            }
        `,
        getReferenceEntry: (q) => ['pullRequest', q.node],
        mockResolvers: {
            PullRequest: (): PullRequestInfo_pullRequest$data => ({
                ' $fragmentType': 'PullRequestInfo_pullRequest',
                number: 423,
                title: 'add PR info to branch table',
                url: 'https://github.com/lowsky/dashboard/pull/42',
                headRefOid: {
                    id: '72b14d30d',
                },
                id: '72b14d30d',
            }),
        },
    } satisfies WithRelayParameters<PullRequestInfoFragmentStoryQuery>,
};
