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
import InternalLink from 'components/InternalLink';

import UserFragmentContainer, { UserFragment_repositoryOwner } from 'apollo/UserFragment';
import { RepoWithBranchList } from './RepoWithBranchListFragment';
import Repo from 'components/Repo';

export const USER_REPO_BRANCHES_QUERY: TypedDocumentNode<GetUserRepoBranchesQuery, GetUserRepoBranchesQueryVariables> =
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

export default function ApolloRoot(props: { authToken: string }) {
    const { userName, repoName } = useParams<{ userName: string; repoName: string }>() ?? {};

    return (
        <ApolloClientContext auth={props.authToken}>
            <Suspense fallback={<div>Loading...</div>}>
                <br />o <InternalLink href="/apollo">back to shortcut list</InternalLink>
                <br />
                <InternalLink href={'/apollo/' + userName}>
                    Repo list of user <strong>{userName!}</strong>
                </InternalLink>
                <UserRepoPageContent userName={userName!} repoName={repoName!} />
            </Suspense>
        </ApolloClientContext>
    );
}

export function UserRepoPageContent({
    userName,
    repoName,
}: Pick<GetRepoBranchesQueryVariables, 'userName' | 'repoName'>) {
    const { error, data } = useSuspenseQuery<GetUserRepoBranchesQuery, GetUserRepoBranchesQueryVariables>(
        USER_REPO_BRANCHES_QUERY,
        {
            variables: { userName },
        }
    );

    if (error) return <div>Error loading data: {error.message}</div>;
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
