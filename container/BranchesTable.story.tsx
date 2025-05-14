import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'react-relay';

import { relayDecorator, WithRelayParameters } from '../relay/relayDecorator';
import { PullRequestMergeFragment_ref$data } from '../relay/__generated__/PullRequestMergeFragment_ref.graphql';
import { RepoWithBranchList } from '../app/relay/[userName]/[repoName]/RepoWithBranchListFragment';
import { BranchesTableStoryQuery } from './__generated__/BranchesTableStoryQuery.graphql';
import { WithInfo } from './BranchInfoRow.story';

const meta: Meta<typeof RepoWithBranchList> = {
    component: RepoWithBranchList,
    decorators: [relayDecorator],
};
export default meta;

type Story = StoryObj<typeof RepoWithBranchList>;

export const WithOneBranch: Story = {
    parameters: {
        query: graphql`
            query BranchesTableStoryQuery {
                node(id: "test-id") {
                    ...RepoWithBranchListFragment_repo
                }
            }
        `,
        getReferenceEntry: (q) => ['repo', q.node],
        mockResolvers: {
            Ref: WithInfo.parameters!.mockResolvers.Ref,
            Commit: WithInfo.parameters!.mockResolvers.Commit,
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
    } satisfies WithRelayParameters<BranchesTableStoryQuery>,
};
