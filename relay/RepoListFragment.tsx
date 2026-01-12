import { Suspense } from 'react';
import { graphql, useFragment, usePaginationFragment } from 'react-relay';
import { Heading, Icon, Link, ListItem, Text, Badge } from '@chakra-ui/react';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';
import InfiniteScrollTrigger from 'components/InfiniteScrollTrigger';
import InternalLink from 'components/InternalLink';

import type { RepoListFragment_user$key } from './__generated__/RepoListFragment_user.graphql';
import type { RepoListFragment_repo$key } from './__generated__/RepoListFragment_repo.graphql';
import type { RepoListPaginationQuery } from './__generated__/RepoListPaginationQuery.graphql';

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
                        ...RepoListFragment_repo
                    }
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

    const { totalCount, edges } = repositories;
    if (!edges) return null;

    const triggerNext = () => loadNext(10);

    return (
        <>
            <Heading>Repositories ({totalCount})</Heading>
            <Ul variant="plain">
                {edges.map((edge, idx) => {
                    const node = edge?.node;
                    if (!node) return null;
                    const isLastElement = edges.length - 1 == idx;
                    return isLastElement && hasNext ? (
                        <InfiniteScrollTrigger key={node['__id']} onLoadMore={triggerNext}>
                            <Suspense fallback={<Spinner />}>
                                <RepoComponent repo={node} />
                            </Suspense>
                        </InfiniteScrollTrigger>
                    ) : (
                        <Suspense key={node?.['__id']} fallback={<Spinner />}>
                            <RepoComponent repo={node} />
                        </Suspense>
                    );
                })}
            </Ul>

            {isLoadingNext && <Spinner size="sm" />}
        </>
    );
}

export default RepoListFragment;

function RepoComponent(props: { repo: RepoListFragment_repo$key }) {
    const data = useFragment<RepoListFragment_repo$key>(
        graphql`
            fragment RepoListFragment_repo on Repository @refetchable(queryName: "RepoBranchListPaginationQuery") {
                name
                nameWithOwner
                isFork
                url
                # description
                pullRequests(first: 1, states: [OPEN]) {
                    totalCount
                }
            }
        `,
        props.repo
    );
    if (!data) return null;

    const { name, nameWithOwner, pullRequests, url, isFork } = data;
    const { totalCount } = pullRequests;
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
