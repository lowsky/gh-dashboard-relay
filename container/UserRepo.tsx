'use client';

import React from 'react';
import { Link, Alert, AlertIcon, Flex, AlertDescription } from '@chakra-ui/react';

import { RevalidateCacheButton } from 'components/RevalidateCacheButton';
import { useUserRepo } from 'components/useUserRepoFromRoute';
import { RepoType } from 'components/Repo';
import { useUILib } from 'components/UILibContext';
import { User as UserType } from 'restinpeace/github';

export type UserRepoProps = Readonly<{
    user?: UserType;
    repo?: RepoType;
}>;

const UserRepo: React.FC<UserRepoProps> = ({ user, repo }) => {
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
                    <AlertDescription>
                        Repo
                        <br />
                        <Link href={'https://github.com/' + userName + '/' + repoName}>
                            {userName}/{repoName}
                        </Link>
                        <br />
                        not found!
                    </AlertDescription>
                </Alert>
            )}
            {repo && <Repo repo={repo} />}
            {user && (
                // @ts-expect-error temporary ignore type mismatch
                <User user={user} />
            )}
            <RevalidateCacheButton pathPrefix="/restful" userName={userName} repoName={repoName} />

            {repo && <BranchesTable repo={repo} />}
        </Flex>
    );
};

export default UserRepo;
