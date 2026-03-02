import { graphql } from 'react-relay';

import type { WithRelayParameters } from './storybook/relayDecorator';

import { RepoWithBranchList } from '../app/relay/[userName]/[repoName]/RepoWithBranchListFragment';
import type { BranchesTableStoryQuery } from './__generated__/BranchesTableStoryQuery.graphql';
import { WithInfo } from './BranchInfoRow.story';
import { RepoWithBranchListFragment_repo$key } from '../app/relay/[userName]/[repoName]/__generated__/RepoWithBranchListFragment_repo.graphql';
import preview from '../.storybook/preview';

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
            Ref: WithInfo.parameters.mockResolvers.Ref,
            Commit: WithInfo.parameters.mockResolvers.Commit,
            PullRequest: WithInfo.parameters.mockResolvers.PullRequest,
        },
    } satisfies WithRelayParameters<BranchesTableStoryQuery>,
});
