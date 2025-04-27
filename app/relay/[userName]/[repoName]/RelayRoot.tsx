'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { RelayRootRepoQuery, RelayRootRepoQuery$data } from './__generated__/RelayRootRepoQuery.graphql';
import RelayClientContext from '../../../../lib/RelayClientContext';

import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import InternalLink from 'components/InternalLink';
import RichErrorBoundary from 'components/RichErrorBoundary';

import UserFragmentContainer from '../../../../relay/UserFragment';
import { RepoWithBranchList } from './RepoWithBranchListFragment';

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
            <Suspense fallback={<ContentLoadingFallback />}>
                <RichErrorBoundary message={'User/repo can not be found or fetched, please try to re-login!'}>
                    <InternalLink href="/relay">back to main page</InternalLink>
                    <br />
                    <InternalLink href="/relay">back to shortcut list</InternalLink>
                    <br />
                    <InternalLink href={'/relay/' + userName}>
                        Repo list of user <strong>{userName}</strong>
                    </InternalLink>
                    <UserRepoPageContent userName={userName} repoName={repoName} />
                </RichErrorBoundary>
            </Suspense>
        </RelayClientContext>
    );
}

export function UserRepoPageContent({ userName, repoName }) {
    const { repository, user }: RelayRootRepoQuery$data = useLazyLoadQuery<RelayRootRepoQuery>(query, {
        userName,
        repoName,
    });

    if (!repository) return null;

    return (
        <>
            <UserFragmentContainer user={user} />
            <RepoWithBranchList repo={repository} />
        </>
    );
}
