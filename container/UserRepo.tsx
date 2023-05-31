'use client';

import React from 'react';
import { Alert, AlertIcon, Flex } from '@chakra-ui/react';

import { useUserRepo } from '../components/useUserRepoFromRoute';
import { RepoType } from '../components/Repo';
import { useUILib } from '../components/UILibContext';
import { User as UserType } from '../restinpeace/github';

export type UserRepoProps = Readonly<{
    user?: UserType;
    repo?: RepoType;
}>;

const UserRepo: React.FunctionComponent<UserRepoProps> = ({ user, repo }) => {
    const { userName, repoName } = useUserRepo();
    const { Repo, User, BranchesTable } = useUILib();

    return (
        <Flex gap="4" direction="column">
            {!user && (
                <Alert status="warning">
                    <AlertIcon />
                    User not found.
                </Alert>
            )}
            {!repo && (
                <Alert status="warning">
                    <AlertIcon />
                    Repo not found:
                    <a href={'https://github.com/' + userName + '/' + repoName}>
                        {userName}/{repoName}
                    </a>
                </Alert>
            )}
            {repo && <Repo repo={repo} />}
            {user && <User user={user} />}
            {repo && <BranchesTable repo={repo} />}
        </Flex>
    );
};

export default UserRepo;
