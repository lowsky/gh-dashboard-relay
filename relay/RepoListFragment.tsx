import React, { Suspense } from 'react';
import { graphql, useFragment, usePaginationFragment } from 'react-relay';

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
    const { data, hasNext, loadNext } = usePaginationFragment(
        graphql`
            fragment RepoListFragment_user on User
            @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 4 })
            @refetchable(queryName: "RepoListPaginationQuery") {
                name
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

    const { name, repositories } = data;
    return (
        <>
            {name !== null ? (
                <h1>
                    {repositories?.edges?.length ?? '?'} of {repositories?.totalCount ?? '?'} repositories
                </h1>
            ) : null}
            <Ul variant="plain">
                {(repositories?.edges ?? []).map((edge) => {
                    const node = edge?.node;
                    return (
                        <Suspense key={node?.['__id']} fallback={<Spinner />}>
                            <RepoComponent repo={node} />
                        </Suspense>
                    );
                })}
            </Ul>
            {hasNext && (
                <h1>
                    {repositories?.edges?.length ?? '?'} of {repositories?.totalCount ?? '?'} repositories of user{' '}
                    {name}:
                </h1>
            )}
            {hasNext && <Button onClick={() => loadNext(10)}>Load 10 more</Button>}
        </>
    );
}

export default RepoListFragment;

export function RepoComponent(props: { repo: RepoListFragment_repo$key }) {
    const data = useFragment(
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
    return (
        <li>
            <InternalLink href={'./' + data.nameWithOwner}>{data.name}</InternalLink>
            <a href={data.url}>{data.name}</a>
            <span>{data.pullRequests.totalCount} PRs</span>
        </li>
    );
}
