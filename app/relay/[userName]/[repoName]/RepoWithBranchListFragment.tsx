import React, { Suspense } from 'react';
import { graphql, useFragment } from 'react-relay';

import { RepoWithBranchListFragment_repo$key } from './__generated__/RepoWithBranchListFragment_repo.graphql';
import { Spinner } from 'components/Spinner';
import BranchesTable from 'container/BranchesTable';
import Repo from 'components/Repo';

export function RepoWithBranchList(props: { repo: RepoWithBranchListFragment_repo$key }) {
    const { branches, name, owner } = useFragment(
        graphql`
            fragment RepoWithBranchListFragment_repo on Repository
            @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 5 })
            @refetchable(queryName: "RepoWithBranchPaginationQuery") {
                name
                owner {
                    login
                }
                url
                description
                #                pullRequests(first: 1, states: [OPEN]) {
                #                    totalCount
                #                    edges {
                #                        node {
                #                            headRefName
                #                            baseRefName
                #                            state
                #                            merged
                #                            mergeable
                #                            commits(first: 5) {
                #                                totalCount
                #                            }
                #                        }
                #                    }
                #                }
                branches: refs(refPrefix: "refs/heads/", first: $count, after: $cursor)
                    @connection(key: "RepoWithBranchList_repositories_branches") {
                    edges {
                        node {
                            ...BranchInfoRow_ref
                        }
                    }
                }
            }
        `,
        props.repo
    );

    if (!name || !owner) return <p>repo not found!</p>;

    return (
        <>
            <Repo repoName={name} userName={owner?.login}></Repo>
            <Suspense fallback={<Spinner />}>
                <BranchesTable branches={branches} />
            </Suspense>
        </>
    );
}
