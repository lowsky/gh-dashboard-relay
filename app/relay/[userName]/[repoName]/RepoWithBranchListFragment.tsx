import React from 'react';
import { graphql, useFragment } from 'react-relay';

import { RepoWithBranchListFragment_repo$key } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import BranchesTable from 'relay/BranchesTable';

export function RepoWithBranchList(props: { repo: RepoWithBranchListFragment_repo$key }) {
    const { branches } = useFragment(
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

    if (!branches) return <p>No branches found!</p>;

    return <BranchesTable branches={branches} />;
}
