import { Suspense } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';

import { RepoWithBranchListFragment_repo$key } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import { RepoWithBranchPaginationQuery } from './__generated__/RepoWithBranchPaginationQuery.graphql';
import BranchesTable from 'relay/BranchesTable';
import BranchInfoRowFragment, { SkeletonRow } from 'relay/BranchInfoRowFragment';

export function RepoWithBranchList(props: { repo: RepoWithBranchListFragment_repo$key }) {
    const [{ branches, id }, refetch] = useRefetchableFragment<
        RepoWithBranchPaginationQuery,
        RepoWithBranchListFragment_repo$key
    >(
        graphql`
            fragment RepoWithBranchListFragment_repo on Repository
            @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 10 })
            @refetchable(queryName: "RepoWithBranchPaginationQuery") {
                branches: refs(refPrefix: "refs/heads/", first: $count, after: $cursor)
                    @connection(key: "RepoWithBranchList_repositories_branches") {
                    edges {
                        node {
                            ...BranchInfoRowFragment_ref
                        }
                    }
                }
            }
        `,
        props.repo
    );
    const refetchDefault = () =>
        refetch(
            { id },
            {
                fetchPolicy: 'store-and-network',
            }
        );

    if (!branches || branches.edges?.length === 0) return <p>No branches found!</p>;

    return (
        <BranchesTable refetch={refetchDefault}>
            {(branches?.edges ?? []).map((edge, idx) => (
                <Suspense fallback={<SkeletonRow />} key={idx}>
                    {edge?.node && <BranchInfoRowFragment branch={edge.node} />}
                </Suspense>
            ))}
        </BranchesTable>
    );
}
