import { Suspense } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import { Heading } from '@chakra-ui/react';

import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';

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
                        ...RepoItemFragment_repo
                    }
                }
                pageInfo {
                    endCursor
                }
                totalCount
            }
        }
    `;

    const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<
        RepoListPaginationQuery,
        RepoListFragment_user$key
    >(graphQLTaggedNode, props.user);

    const { repositories } = data;

    const { totalCount } = repositories;

    const edges = repositories.edges ?? [];

    if (totalCount == 0 || edges.length == 0) return <div>No repositories found</div>;

    return (
        <>
            <Heading>Repositories ({totalCount})</Heading>
            <Ul variant="plain">
                {edges.map((edge, idx) => {
                    const node = edge?.node;
                    if (!node) return null;

                    const isLastElement = edges.length - 1 == idx;
                    return isLastElement && hasNext ? (
                        <InfiniteScrollTrigger key={node['__id']} onLoadMore={() => loadNext(10)}>
                            <Suspense fallback={<Spinner />}>
                                <RepoItemFragment repo={node} />
                            </Suspense>
                        </InfiniteScrollTrigger>
                    ) : (
                        <Suspense key={node?.['__id']} fallback={<Spinner />}>
                            <RepoItemFragment repo={node} />
                        </Suspense>
                    );
                })}
            </Ul>

            {isLoadingNext && <Spinner size="sm" />}
        </>
    );
}

export default RepoListFragment;
