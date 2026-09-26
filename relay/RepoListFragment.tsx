import { useState } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { Heading } from '@chakra-ui/react';

import { PaginatedList } from 'components/PaginatedList';
import { Checkbox } from 'components/ui/checkbox';

import type { RepoListFragment_user$key } from './__generated__/RepoListFragment_user.graphql';
import type { RepoListPaginationQuery } from './__generated__/RepoListPaginationQuery.graphql';

import { RepoItemFragment } from 'relay/RepoItemFragment';

type Props = {
    user: RepoListFragment_user$key;
};

function RepoListFragment(props: Props) {
    const graphQLTaggedNode = graphql`
        fragment RepoListFragment_user on User
        @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 10 })
        @refetchable(queryName: "RepoListPaginationQuery") {
            repositories(
                orderBy: { field: NAME, direction: ASC }
                first: $count
                after: $cursor
                ownerAffiliations: [OWNER]
            ) @connection(key: "RepoList_user_repositories") {
                edges {
                    node {
                        id
                        ...RepoItemFragment_repo
                    }
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
                totalCount
            }
        }
    `;
    const [showAll, setShowAll] = useState(false);

    const { data, loadNext, isLoadingNext } = usePaginationFragment<
        RepoListPaginationQuery,
        RepoListFragment_user$key
    >(graphQLTaggedNode, props.user);

    const { repositories } = data;
    const { totalCount, pageInfo, edges } = repositories;

    if (totalCount == 0 || edges?.length == 0) return <div>No repositories found</div>;

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <>
            <Heading>Repositories ({totalCount})</Heading>
            <Checkbox checked={showAll} onChange={toggleShowAll} size="xs">
                {showAll ? (
                    <span title="click to hide forked repos">hide forks</span>
                ) : (
                    <span title="click to show entries for forked repos, too">show forks</span>
                )}
            </Checkbox>

            <PaginatedList
                edges={edges}
                loading={isLoadingNext}
                pageInfo={pageInfo}
                loadMore={() => {
                    loadNext(10);
                }}>
                {({ node }) => <RepoItemFragment repo={node} hideIfFork={!showAll} />}
            </PaginatedList>
        </>
    );
}

export default RepoListFragment;
