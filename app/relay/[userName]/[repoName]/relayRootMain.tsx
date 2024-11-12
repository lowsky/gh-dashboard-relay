'use client';

import { useLazyLoadQuery } from 'react-relay/hooks';

import { relayPageUserQuery } from 'queries/__generated__/relayPageUserQuery.graphql';
import { relayPageRepoQuery } from 'queries/__generated__/relayPageRepoQuery.graphql';
import { repoQuery, userQuery } from 'queries/relayPage';
import UserRepo from 'relay/UserRepo';
import { useUserRepo } from 'components/useUserRepoFromRoute';

export const RelayRootMain = () => {
    const { userName, repoName } = useUserRepo();
    const variables = {
        userName,
        repoName,
    };
    const userData = useLazyLoadQuery<relayPageUserQuery>(userQuery, variables);
    const repoData = useLazyLoadQuery<relayPageRepoQuery>(repoQuery, variables);

    return <UserRepo user={userData.user} repo={repoData.repo} />;
};
