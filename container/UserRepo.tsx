'use client';

import React from 'react';
import { Link, Flex } from '@chakra-ui/react';

import { RevalidateCacheButton } from 'components/RevalidateCacheButton';
import { useUserRepo } from 'components/useUserRepoFromRoute';
import { RepoType } from 'components/Repo';
import { useUILib } from 'components/UILibContext';
import { User as UserType } from 'restinpeace/github';

import { Alert } from 'components/ui/alert';

export type UserRepoProps = Readonly<{
    user?: UserType;
    repo?: RepoType;
}>;

const UserRepo: React.FC<UserRepoProps> = ({ user, repo }) => {
    const { userName, repoName } = useUserRepo();
    const { Repo, User, BranchesTable } = useUILib();

    return (
        <Flex gap="4" direction="column">
            {!user && <Alert status="warning">User not found.</Alert>}
            {!repo && (
                <Alert status="warning">
                    Repo
                    <br />
                    <Link href={'https://github.com/' + userName + '/' + repoName}>
                        {userName}/{repoName}
                    </Link>
                    <br />
                    not found!
                </Alert>
            )}
            {repo && <Repo repo={repo} />}
            {user && <User user={user} />}
            <RevalidateCacheButton pathPrefix="/restful" userName={userName} repoName={repoName} />

            {repo && <BranchesTable repo={repo} />}
        </Flex>
    );
};

export default UserRepo;
