'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import type { TypedDocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/client/react';
import { Flex } from '@chakra-ui/react';

import type {
    GetRepoBranchesQueryVariables,
    GetUserRepoBranchesQuery,
    GetUserRepoBranchesQueryVariables,
} from '../../__gen__/graphql';

import ApolloClientContext from 'lib/ApolloClientContext';

import UserFragmentContainer, { UserFragment_repositoryOwner } from 'apollo/UserFragment';
import { RepoWithBranchList } from './RepoWithBranchListFragment';
import Repo from 'components/Repo';
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'components/ui/breadcrumb';

export const REPOSITORYOWNER_QUERY: TypedDocumentNode<GetUserRepoBranchesQuery, GetUserRepoBranchesQueryVariables> =
    gql`
        query GetUserRepoBranches($userName: String!) {
            repositoryOwner(login: $userName) {
                id # key value for resolving the fragment in child component
                login
                avatarUrl
                ...UserFragment_repositoryOwner
            }
        }
        ${UserFragment_repositoryOwner}
    `;

export default function Root(props: { authToken: string }) {
    const { userName, repoName } = useParams<{ userName: string; repoName: string }>() ?? {};

    return (
        <ApolloClientContext auth={props.authToken}>
            <BreadcrumbRoot>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                <BreadcrumbLink href="/apollo">Apollo</BreadcrumbLink>
                <BreadcrumbLink href={'/apollo/' + userName}>user {userName} </BreadcrumbLink>
                <BreadcrumbCurrentLink>repo</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
            <br />
            <Suspense fallback={<div>Loading...</div>}>
                <UserRepoPageContent userName={userName!} repoName={repoName!} />
            </Suspense>
        </ApolloClientContext>
    );
}

export function UserRepoPageContent({
    userName,
    repoName,
}: Pick<GetRepoBranchesQueryVariables, 'userName' | 'repoName'>) {
    const { data } = useSuspenseQuery<GetUserRepoBranchesQuery, GetUserRepoBranchesQueryVariables>(
        REPOSITORYOWNER_QUERY,
        {
            variables: {
                userName,
            },
        }
    );

    if (!data) return <div>,no data...</div>;

    const { repositoryOwner } = data;

    if (!repositoryOwner) return null;

    return (
        <Flex gap="4" direction="column">
            <Repo repoName={repoName} userName={userName}></Repo>
            <Suspense fallback="Loading ...">
                <UserFragmentContainer user={repositoryOwner} />
                <RepoWithBranchList userName={userName} repoName={repoName} />
            </Suspense>
        </Flex>
    );
}
