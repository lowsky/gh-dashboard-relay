import React, { useContext } from 'react';
import { Alert, AlertIcon, Flex } from '@chakra-ui/react';

import { Branches, User as UserType } from '../restinpeace/fetchGithubApi';
import UILibContext, { UILib } from '../components/UILibContext';

export type DoMergePR = (num: number) => Promise<unknown>;

export type UserRepoProps = {
    readonly doMergePR?: DoMergePR;
    readonly user?: UserType;
    readonly repo?: {
        readonly name: string;
        readonly branches: Branches;
    };
};

const UserRepo: React.FunctionComponent<UserRepoProps> = ({ user, repo, doMergePR }) => {
    const { Repo, User, BranchTable } = useContext<UILib>(UILibContext);

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
                    Repo not found.
                </Alert>
            )}
            {repo && <Repo repo={repo} />}
            {user && <User user={user} />}
            {repo && <BranchTable repo={repo} doMergePR={doMergePR} />}
        </Flex>
    );
};

export default UserRepo;
