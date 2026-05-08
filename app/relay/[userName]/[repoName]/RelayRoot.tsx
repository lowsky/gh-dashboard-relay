'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { Flex } from '@chakra-ui/react';

import type {
    RelayRootRepoQuery,
    RelayRootRepoQuery$data,
    RelayRootRepoQuery$variables,
} from './__generated__/RelayRootRepoQuery.graphql';
import RelayClientContext from 'lib/RelayClientContext';

import UserFragmentContainer from 'relay/UserFragment';
import { RepoWithBranchList } from './RepoWithBranchListFragment';
import Repo from 'components/Repo';
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'components/ui/breadcrumb';

const query = graphql`
    query RelayRootRepoQuery($userName: String!, $repoName: String!) {
        repository(name: $repoName, owner: $userName) {
            ...RepoWithBranchListFragment_repo
        }
        user(login: $userName) {
            ...UserFragment_user
        }
    }
`;

export default function RelayRoot(props: { authToken: string }) {
    const { userName, repoName } = useParams<{ userName: string; repoName: string }>() ?? {};

    return (
        <RelayClientContext auth={props.authToken}>
            <BreadcrumbRoot>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                <BreadcrumbLink href="/relay">Relay</BreadcrumbLink>
                <BreadcrumbLink href={'/relay/' + userName}>user {userName} </BreadcrumbLink>
                <BreadcrumbCurrentLink>repo</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
            <br />
            <Suspense>
                <UserRepoPageContent userName={userName!} repoName={repoName!} />
            </Suspense>
        </RelayClientContext>
    );
}

export function UserRepoPageContent({ userName, repoName }: RelayRootRepoQuery$variables) {
    const { repository, user }: RelayRootRepoQuery$data = useLazyLoadQuery<RelayRootRepoQuery>(query, {
        userName,
        repoName,
    });

    if (!repository || !user) return null;

    return (
        <Flex gap="4" direction="column">
            <Repo repoName={repoName} userName={userName}></Repo>
            <UserFragmentContainer user={user} />
            <Suspense fallback="Loading ...">
                <RepoWithBranchList repo={repository} />
            </Suspense>
        </Flex>
    );
}
