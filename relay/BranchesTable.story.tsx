import { graphql } from 'react-relay';

import type { WithRelayParameters } from './storybook/relayDecorator';
import preview from '../.storybook/preview';

import { RepoWithBranchList } from '../app/relay/[userName]/[repoName]/RepoWithBranchListFragment';
import type { BranchesTableStoryQuery } from './__generated__/BranchesTableStoryQuery.graphql';
import { WithInfo } from './BranchInfoRow.story';
import { RepoWithBranchListFragment_repo$key } from '../app/relay/[userName]/[repoName]/__generated__/RepoWithBranchListFragment_repo.graphql';

const meta = preview.meta({
    component: RepoWithBranchList,
    tags: ['skipTesting', '!autodocs'],
});

export default meta;

export const WithOneBranch = meta.story({
    args: {
        repo: {
            ' $fragmentSpreads': {
                RepoWithBranchListFragment_repo: true,
            },
        } satisfies RepoWithBranchListFragment_repo$key,
    },
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
            Ref: WithInfo.composed.parameters.mockResolvers.Ref,
            Commit: WithInfo.composed.parameters.mockResolvers.Commit,
            PullRequest: WithInfo.composed.parameters.mockResolvers.PullRequest,
        },
    } satisfies WithRelayParameters<BranchesTableStoryQuery>,
});
