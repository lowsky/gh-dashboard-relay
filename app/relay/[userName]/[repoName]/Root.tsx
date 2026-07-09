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

const USER_REPO_BRANCHES_QUERY = graphql`
    query RelayRootRepoQuery($userName: String!, $repoName: String!) {
        user(login: $userName) {
            ...UserFragment_user
        }
        repository(name: $repoName, owner: $userName) {
            ...RepoWithBranchListFragment_repo
        }
    }
`;

export default function Root(props: { authToken: string }) {
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
            <Suspense fallback={<div>Loading...</div>}>
                <UserRepoPageContent userName={userName!} repoName={repoName!} />
            </Suspense>
        </RelayClientContext>
    );
}

export function UserRepoPageContent({ userName, repoName }: RelayRootRepoQuery$variables) {
    const { repository, user }: RelayRootRepoQuery$data = useLazyLoadQuery<RelayRootRepoQuery>(
        USER_REPO_BRANCHES_QUERY,
        {
            userName,
            repoName,
        }
    );

    if (!repository || !user) return <div>,no data...</div>;

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
