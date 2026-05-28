import { useState } from 'react';
import type { TypedDocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Heading, Icon, Link, ListItem, Text, Badge } from '@chakra-ui/react';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { GetRepositoriesQuery, GetRepositoriesQueryVariables } from '../app/apollo/__gen__/graphql';

import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';
import InternalLink from 'components/InternalLink';
import { Checkbox } from 'components/ui/checkbox';

export const REPOS_QUERY: TypedDocumentNode<GetRepositoriesQuery, GetRepositoriesQueryVariables> = gql`
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
    const [showAll, setShowAll] = useState(false);
    const { loading, error, data, fetchMore } = useQuery<GetRepositoriesQuery, GetRepositoriesQueryVariables>(
        REPOS_QUERY,
        {
            variables: { login, first: 10 },
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

    const loadMore = async (after: string) => {
        if (!pageInfo.hasNextPage) return;

        await fetchMore({
            variables: { after, login },
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
                        const node = edge?.node;
                        if (!node) return null;

                        const isLastElement = edges.length - 1 === idx;
                        return isLastElement && pageInfo.hasNextPage ? (
                            <InfiniteScrollTrigger
                                key={node.id}
                                onLoadMore={() => !loading && pageInfo.endCursor && loadMore(pageInfo.endCursor)}>
                                {
                                    // @ts-expect-error  Types of property 'url' are incompatible. Type 'unknown' is not assignable to type 'string'.
                                    <RepoItem repo={node} hideIfFork={!showAll} />
                                }
                            </InfiniteScrollTrigger>
                        ) : (
                            // @ts-expect-error  Types of property 'url' are incompatible. Type 'unknown' is not assignable to type 'string'.
                            <RepoItem key={node.id} repo={node} hideIfFork={!showAll} />
                        );
                    })}
                </Ul>
            )}

            {loading && <Spinner size="sm" />}
        </>
    );
}

interface RepoItemProps {
    hideIfFork?: boolean;
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

function RepoItem({ repo, hideIfFork }: RepoItemProps) {
    const { name, nameWithOwner, pullRequests, url, isFork } = repo;
    const { totalCount } = pullRequests;

    if (isFork && hideIfFork) return null;

    return (
        <ListItem alignItems="center" gap="1">
            <InternalLink prefetch={false} href={'./' + nameWithOwner}>
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
