import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';

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
        <React.Fragment>
            {!user && <p>User not found.</p>}
            {repo && <Repo repo={repo} />}
            {user && !repo && <p>Repo not found.</p>}
            <Box>
                {user && <User user={user} />}
                {repo && <BranchTable repo={repo} doMergePR={doMergePR} />}
            </Box>
        </React.Fragment>
    );
};

export default UserRepo;
