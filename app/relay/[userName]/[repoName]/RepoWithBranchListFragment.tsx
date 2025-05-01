import React from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';

import { RepoWithBranchListFragment_repo$key } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import { RepoWithBranchPaginationQuery } from './__generated__/RepoWithBranchPaginationQuery.graphql';
import BranchesTable from 'relay/BranchesTable';

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

    if (!branches) return <p>No branches found!</p>;

    // @ts-expect-error TS2322: Type is not assignable to type RelayCon<FragmentRefs<"BranchInfoRowFragment_ref">> temporary
    return <BranchesTable branches={branches} refetch={refetchDefault} />;
}
