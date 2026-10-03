'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { Breadcrumb, Flex } from '@chakra-ui/react';

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
import { LuHouse } from 'react-icons/lu';
import * as React from 'react';

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
            <Breadcrumb.Root ref={ref} size="lg" {...rest}>
                <Breadcrumb.List gap={separatorGap}>
                    {validChildren.map((child, index) => {
                        const last = index === validChildren.length - 1;
                        return (
                            <React.Fragment key={index}>
                                <Breadcrumb.Item>{child}</Breadcrumb.Item>
                                {!last && <Breadcrumb.Separator>{separator}</Breadcrumb.Separator>}
                            </React.Fragment>
                        );
                    })}
                </Breadcrumb.List>
            </Breadcrumb.Root>
            <BreadcrumbRoot size="lg">
                <BreadcrumbLink href="/">
                    <LuHouse />
                    Home
                </BreadcrumbLink>
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
