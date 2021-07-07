import React, { useContext } from "react";

import { Branches, User as UserType } from '../restinpeace/fetchGithubApi';
import UILibContext from '../components/UILibContext';

export interface UserRepoProps {
    github?: {
        user?: UserType;
        repo?: {
            name: string;
            branches: Branches;
        };
    };
}

let UserRepo: React.FunctionComponent<UserRepoProps> = ({ github }) => {
    const { Repo, User, BranchTable } = useContext(UILibContext);

    if (!github) return null;

    const { user, repo } = github;
    return (
        <React.Fragment>
            {!user && <p>User not found.</p>}
            {repo && <Repo repo={repo} />}
            {user && !repo && <p>Repo not found.</p>}
            <div className="column">
                {user && <User user={user} />}
                {repo && <BranchTable repo={repo} />}
            </div>
        </React.Fragment>
    );
};

export default UserRepo;
