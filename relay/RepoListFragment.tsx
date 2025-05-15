import React, { Suspense } from 'react';
import { graphql, useFragment, usePaginationFragment } from 'react-relay';
import { ListItem } from '@chakra-ui/react';

import { Button } from 'components/ui/button';
import { Ul } from 'components/ChakraMdxProvider';
import { Spinner } from 'components/Spinner';

import { RepoListFragment_user$key } from './__generated__/RepoListFragment_user.graphql';
import { RepoListFragment_repo$key } from './__generated__/RepoListFragment_repo.graphql';
import InternalLink from 'components/InternalLink';

type Props = {
    user: RepoListFragment_user$key;
};

function RepoListFragment(props: Props) {
    const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
        graphql`
            fragment RepoListFragment_user on User
            @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 10 })
            @refetchable(queryName: "RepoListPaginationQuery") {
                repositories(orderBy: { field: NAME, direction: ASC }, first: $count, after: $cursor)
                    @connection(key: "RepoList_user_repositories") {
                    edges {
                        node {
                            ...RepoListFragment_repo
                        }
                    }
                    totalCount
                }
            }
        `,
        props.user
    );

    if (!data) return null;

    const { repositories } = data;
    if (!repositories) return null;
    return (
        <>
            <Ul variant="plain">
                {(repositories.edges ?? []).map((edge) => {
                    const node = edge?.node;
                    if (!node) return null;
                    return (
                        <Suspense key={node?.['__id']} fallback={<Spinner />}>
                            <RepoComponent repo={node} />
                        </Suspense>
                    );
                })}
            </Ul>

            {hasNext && (
                <p>
                    {repositories.edges?.length ?? '?'} of {repositories.totalCount ?? '?'} repositories.
                </p>
            )}

            {hasNext && <Button onClick={() => loadNext(10)}>Load 10 more</Button>}
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
                url
                description
                pullRequests(first: 1, states: [OPEN]) {
                    totalCount
                }
            }
        `,
        props.repo
    );
    if (!data) return null;

    const { name, nameWithOwner, pullRequests, url } = data;
    const { totalCount } = pullRequests;
    return (
        <ListItem>
            <InternalLink href={'./' + nameWithOwner}>{name}</InternalLink>
            <a href={url}>(open on GitHub)</a>
            {totalCount > 0 && <span>{totalCount} PRs</span>}
        </ListItem>
    );
}
