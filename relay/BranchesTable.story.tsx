import type { Meta } from '@storybook/nextjs-vite';
import { graphql } from 'react-relay';

import type { WithRelayParameters } from './relayDecorator';
import { relayDecorator } from './relayDecorator';
import { RepoWithBranchList } from '../app/relay/[userName]/[repoName]/RepoWithBranchListFragment';
import type { BranchesTableStoryQuery } from './__generated__/BranchesTableStoryQuery.graphql';
import { WithInfo } from './BranchInfoRow.story';

const meta = {
    component: RepoWithBranchList,
    decorators: [relayDecorator],
    tags: ['skipTesting', '!autodocs'],
} satisfies Meta<typeof RepoWithBranchList>;

export default meta;

export const WithOneBranch = {
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
            Ref: WithInfo.parameters.mockResolvers.Ref,
            Commit: WithInfo.parameters.mockResolvers.Commit,
            PullRequest: WithInfo.parameters.mockResolvers.PullRequest,
        },
    } satisfies WithRelayParameters<BranchesTableStoryQuery>,
};
