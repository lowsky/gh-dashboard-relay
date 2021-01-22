import React, { useContext } from "react";

import { BranchesWithErrorMessage, UserWithErrorMessage } from '../restinpeace/fetchGithubApi';
import UILibContext from '../components/UILibContext';

export interface UserRepoProps {
    github?: {
        user?: UserWithErrorMessage;
        repo?: {
            name: string;
            branches: BranchesWithErrorMessage;
        };
    };
}

let UserRepo: React.FunctionComponent<UserRepoProps> = ({ github }) => {
    const { Repo, User, BranchTable } = useContext(UILibContext);

    if (!github) return null;

    const { user, repo } = github;

    return (
        <React.Fragment>
            <Repo repo={repo} />
            <div className="column">
            <User user={user} />
                <BranchTable repo={repo} />
            </div>
        </React.Fragment>
    );
};

export default UserRepo;
