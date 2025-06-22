import React, { Suspense } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Heading, Icon, Link, ListItem, Text, Badge } from '@chakra-ui/react';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GetRepositoriesQuery, GetRepositoriesQueryVariables } from '../app/apollo/__gen__/graphql';

import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';
import InternalLink from 'components/InternalLink';

const REPOS_QUERY = gql`
    query GetRepositories($login: String!, $after: String, $first: Int!) {
        repositoryOwner(login: $login) {
            login
            id
            repositories(
                first: $first
                after: $after
                orderBy: { field: NAME, direction: ASC }
                ownerAffiliations: [OWNER]
            ) {
                totalCount
                pageInfo {
                    hasNextPage
                    endCursor
                }
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
            }
        }
    }
`;

interface RepoListProps {
    login: string;
}

export default function RepoList({ login }: RepoListProps) {
    const { loading, error, data, fetchMore } = useQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(
        REPOS_QUERY,
        {
            variables: { login, first: 10 },
        }
    );

    if (loading && !data) return <div>Loading repositories...</div>;
    if (error) return <div>Error loading repositories: {error.message}</div>;
    if (!data || !data.repositoryOwner || !data.repositoryOwner.repositories) return <div>No repositories found</div>;

    const { repositories, id } = data.repositoryOwner;
    const { totalCount, edges, pageInfo } = repositories;

    const loadMore = async (after: string) => {
        if (!pageInfo.hasNextPage) return;

        await fetchMore({
            variables: { after, login },
            updateQuery: (
                previousQueryResult, //Unmasked<TData>
                options
            ) => {
                const { fetchMoreResult } = options;
                const repositoryOwner = {
                    ...previousQueryResult.repositoryOwner,
                    ...fetchMoreResult.repositoryOwner,
                    repositories: {
                        totalCount: -1, // placeholder
                        ...previousQueryResult.repositoryOwner?.repositories,
                        ...fetchMoreResult.repositoryOwner?.repositories,
                        pageInfo: {
                            hasNextPage: false, // placeholder
                            ...previousQueryResult.repositoryOwner?.repositories?.pageInfo,
                            ...fetchMoreResult.repositoryOwner?.repositories.pageInfo,
                        },
                        edges: [
                            ...(previousQueryResult.repositoryOwner?.repositories?.edges ?? []),
                            ...(fetchMoreResult.repositoryOwner?.repositories.edges ?? []),
                        ],
                    },
                    id,
                    login,
                };
                return {
                    ...previousQueryResult,
                    ...fetchMoreResult,
                    repositoryOwner,
                } satisfies GetRepositoriesQuery;
            },
        });
    };

    return (
        <>
            <Heading>Repositories ({totalCount})</Heading>
            {edges && (
                <Ul variant="plain">
                    {edges.map((edge: any, idx: number) => {
                        const node = edge?.node;
                        if (!node) return null;

                        const isLastElement = edges.length - 1 === idx;
                        return isLastElement && pageInfo.hasNextPage ? (
                            <InfiniteScrollTrigger
                                key={node.id}
                                onLoadMore={() => pageInfo.endCursor && loadMore(pageInfo.endCursor)}>
                                <Suspense fallback={<Spinner />}>
                                    <RepoItem repo={node} />
                                </Suspense>
                            </InfiniteScrollTrigger>
                        ) : (
                            <Suspense key={node.id} fallback={<Spinner />}>
                                <RepoItem repo={node} />
                            </Suspense>
                        );
                    })}
                </Ul>
            )}

            {loading && <Spinner size="sm" />}
        </>
    );
}

interface RepoItemProps {
    repo: {
        name: string;
        nameWithOwner: string;
        isFork: boolean;
        url: string;
        pullRequests: {
            totalCount: number;
        };
    };
}

function RepoItem({ repo }: RepoItemProps) {
    const { name, nameWithOwner, pullRequests, url, isFork } = repo;
    const { totalCount } = pullRequests;

    return (
        <ListItem alignItems="center" gap="1">
            <InternalLink prefetch={false} href={`/apollo/${nameWithOwner}`}>
                {name}
            </InternalLink>
            {isFork && <Badge>fork</Badge>}
            {totalCount > 0 && <span> - {totalCount} PRs</span>}
            {totalCount > 0 && (
                <Link href={url} rel="noopener noreferrer nofollow" target="_blank">
                    - <Text> open in GitHub</Text>
                    <Icon ml={1}>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                    </Icon>
                </Link>
            )}
        </ListItem>
    );
}
