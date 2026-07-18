import { Suspense } from 'react';
import { gql, type TypedDocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

import BranchesTable from 'components/BranchesTable';
import BranchInfoRowFragment, { BranchInfoRowFragment_ref, SkeletonRow } from 'apollo/BranchInfoRowFragment';
import type { GetRepoBranchesQuery, GetRepoBranchesQueryVariables } from '../../__gen__/graphql';

export const RepoBranchesQuery: TypedDocumentNode<GetRepoBranchesQuery, GetRepoBranchesQueryVariables> = gql`
    query GetRepoBranches($userName: String!, $repoName: String!, $after: String, $count: Int!) {
        repository(name: $repoName, owner: $userName) {
            id
            branches: refs(refPrefix: "refs/heads/", first: $count, after: $after) {
                totalCount
                pageInfo {
                    hasNextPage
                    endCursor
                }
                edges {
                    node {
                        id
                        name
                        ...BranchInfoRowFragment_ref
                    }
                }
            }
        }
    }
    ${BranchInfoRowFragment_ref}
`;

export function RepoWithBranchList(props: { userName: string; repoName: string }) {
    const variables = {
        userName: props.userName,
        repoName: props.repoName,
        count: 10,
    };
    const { data, refetch, loading } = useQuery<GetRepoBranchesQuery, GetRepoBranchesQueryVariables>(
        RepoBranchesQuery,
        {
            variables,
        }
    );
    console.log(data);

    if (!data || !data.repository) return 'no main data - incomplete, loading...';

    const { repository } = data;
    const { branches } = repository;
    if (!branches || branches.edges?.length === 0) return <p>No branches found!</p>;

    const refetchDefault = () => refetch(variables);

    return (
        <BranchesTable refetch={loading ? undefined : refetchDefault}>
            {(branches?.edges ?? []).map(
                (edge, idx) =>
                    edge?.node && (
                        <Suspense fallback={<SkeletonRow />} key={idx}>
                            {edge?.node && <BranchInfoRowFragment branch={edge.node} />}
                        </Suspense>
                    )
            )}
        </BranchesTable>
    );
}
