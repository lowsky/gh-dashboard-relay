'use client';

import { Suspense } from 'react';
import { pageQuery, pageQuery$data, pageQuery$variables } from './__generated__/pageQuery.graphql';
import RelayClientContext from '../../../lib/RelayClientContext';
import { ContentLoadingFallback } from 'components/ContentLoadingFallback';
import { graphql, useLazyLoadQuery } from 'react-relay';
import InternalLink from 'components/InternalLink';
import UserWithReposFragment from './UserWithReposFragment';
import RichErrorBoundary from 'components/RichErrorBoundary';

const userQuery = graphql`
    query RelayRootQuery($userName: String!) {
        repositoryOwner(login: $userName) {
            ...UserWithReposFragment_user
        }
        rateLimit {
            limit
            remaining
            used
            resetAt
        }
    }
`;

export default function RelayRoot(props: { authToken: string }) {
    //const { userName } = useParams<{ userName: string }>() ?? {};
    const userName = 'lowsky';
    const variables: pageQuery$variables = {
        userName: userName ?? '',
    };
    return (
        <>
            user page: {variables.userName}
            authToken: {props.authToken}
            <br />
            <RelayClientContext auth={props.authToken}>
                <Suspense fallback={<ContentLoadingFallback />}>
                    {
                        //
                        <RichErrorBoundary>
                            <UserPageContent userName={userName} />
                        </RichErrorBoundary>
                    }
                </Suspense>
            </RelayClientContext>
        </>
    );
}

export function UserPageContent({ userName }) {
    const data = useLazyLoadQuery(userQuery, {
        userName: userName ?? '',
    });

    console.log(data);
    const { repositoryOwner, rateLimit } = data;

    if (repositoryOwner) {
        return (
            <>
                <p>Benutzer nicht gefunden: {userName}</p>
                <InternalLink href="/relay">Back to overview</InternalLink>
                <UserWithReposFragment user={repositoryOwner} />
            </>
        );
    }
}
