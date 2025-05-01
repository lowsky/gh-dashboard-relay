import React from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';
import { Options } from 'react-relay/relay-hooks/useRefetchableFragmentNode';

import { RepoWithBranchListFragment_repo$key } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import BranchesTable from 'relay/BranchesTable';

export function RepoWithBranchList(props: { repo: RepoWithBranchListFragment_repo$key }) {
    const [{ branches }, refetch] = useRefetchableFragment<
        RepoWithBranchListFragment_repoGraphql,
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
    const x: RefetchFnInexact<RepoWithBranchListFragment_repo$key, Options> &
        RefetchFnExact<RepoWithBranchListFragment_repo$key, Options> = refetch;

    if (!branches) return <p>No branches found!</p>;

    return <BranchesTable branches={branches} refetch={refetch} />;
}
