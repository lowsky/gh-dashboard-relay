import { useState } from 'react';
import type { TypedDocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Heading } from '@chakra-ui/react';

import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';
import { Checkbox } from 'components/ui/checkbox';

import type { GetRepositoriesQuery, GetRepositoriesQueryVariables } from '../app/apollo/__gen__/graphql';

import { RepoItem } from 'components/RepoItem';

interface RepoListProps {
    login: string;
}

export const REPOS_QUERY: TypedDocumentNode<GetRepositoriesQuery, GetRepositoriesQueryVariables> = gql`
    query GetRepositories($login: String!, $cursor: String, $count: Int!) {
        repositoryOwner(login: $login) {
            login
            id
            repositories(
                orderBy: { field: NAME, direction: ASC }
                first: $count
                after: $cursor
                ownerAffiliations: [OWNER]
            ) {
                edges {
                    node {
                        id
                        name
                        nameWithOwner
                        isFork
                        url
                        description
                        pullRequests(first: 1, states: [OPEN]) {
                            totalCount
                        }
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
                totalCount
            }
        }
    }
`;

export default function RepoList({ login }: RepoListProps) {
    const [showAll, setShowAll] = useState(false);

    const { loading, error, data, fetchMore } = useQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(
        REPOS_QUERY,
        {
            variables: { login, count: 10 },
        }
    );

    if (error) return <div>Error loading repositories: {error.message}</div>;

    // Initial loading
    // only shown if not already data exist
    if (loading && !data) return <div>Loading repositories...</div>;
    if (!data) return null;

    const { repositoryOwner } = data;

    if (!repositoryOwner?.repositories) return <div>No repositories found</div>;

    const { repositories } = repositoryOwner;
    const { totalCount, edges, pageInfo } = repositories;

    if (totalCount == 0 || edges?.length == 0) return <div>No repositories found</div>;

    const loadMore = async (cursor: string) => {
        if (!pageInfo.hasNextPage) return;

        await fetchMore({
            variables: { cursor, login },
        });
    };

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

            {edges && (
                <Ul variant="plain">
                    {edges.map((edge, idx) => {
                        const isLastElement = edges.length - 1 === idx;
                        const node = edge?.node;
                        const onLoadMore = () => !loading && pageInfo.endCursor && loadMore(pageInfo.endCursor);

                        if (!node) {
                            return (
                                <InfiniteScrollTrigger
                                    key={edges.length - 1}
                                    enabled={isLastElement && pageInfo.hasNextPage}
                                    onLoadMore={onLoadMore}>
                                    <div />
                                </InfiniteScrollTrigger>
                            );
                        }
                        return (
                            <InfiniteScrollTrigger
                                key={node.id}
                                enabled={isLastElement && pageInfo.hasNextPage}
                                onLoadMore={onLoadMore}>
                                {
                                    // @ts-expect-error  Types of property 'url' are incompatible. Type 'unknown' is not assignable to type 'string'.
                                    <RepoItem repo={node} hideIfFork={!showAll} />
                                }
                            </InfiniteScrollTrigger>
                        );
                    })}
                </Ul>
            )}

            {loading && <Spinner size="sm" />}
        </>
    );
}
