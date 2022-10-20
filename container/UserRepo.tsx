import React from 'react';
import { Alert, AlertIcon, Flex } from '@chakra-ui/react';

import { Branches, User as UserType } from '../restinpeace/fetchGithubApi';
import { useUILib } from '../components/UILibContext';

export type DoMergePR = (num: number) => Promise<unknown>;

export type UserRepoProps = Readonly<{
    doMergePR?: DoMergePR;
    user?: UserType;
    repo?: {
        readonly name: string;
        readonly branches: Branches;
    };
    userName: string;
    repoName: string;
}>;

const UserRepo: React.FunctionComponent<UserRepoProps> = ({ user, repo, doMergePR, userName, repoName }) => {
    const { Repo, User, BranchTable } = useUILib();

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
            {repo && <BranchTable repo={repo} doMergePR={doMergePR} />}
        </Flex>
    );
};

export default UserRepo;
