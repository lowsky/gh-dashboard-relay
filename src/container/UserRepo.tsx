import React, { useContext } from 'react';

import { UILibContext } from '../components';
import { BranchesWithErrorMessage, UserWithErrorMessage } from '../restinpeace/fetchGithubApi';

interface UserRepoProps {
    github: {
        user?: UserWithErrorMessage;
        repo?: {
            name: string;
            branches: BranchesWithErrorMessage;
        };
    };
    relay?: any;
}

let UserRepo: React.FunctionComponent<UserRepoProps> = (props: UserRepoProps) => {
    const { github = {} } = props;
    // eslint-disable-next-line no-restricted-globals,no-undef
    const { user, repo } = github;
    const { Repo, User, BranchTable } = useContext(UILibContext);

    return (
        <React.Fragment>
            <Repo repo={repo} />
            <User user={user} />
            <div className="column">
                <BranchTable repo={repo} />
            </div>
        </React.Fragment>
    );
};

export default UserRepo;
