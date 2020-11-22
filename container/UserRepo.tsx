import React, { useContext } from 'react';

import { BranchesWithErrorMessage, UserWithErrorMessage } from '../restinpeace/fetchGithubApi';
import UILibContext from '../components/UILibContext';

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
  if(!props.github) return null;

    const { github } = props;
    // eslint-disable-next-line no-restricted-globals,no-undef
    const { user, repo } = github;
    const { Repo, User, BranchTable } = useContext(UILibContext);

    return (
        <React.Fragment>
            {/*@ts-ignore*/}
          {repo && <Repo repo={repo} />}
            {/*@ts-ignore*/}
          {user && <User user={user} />}
            <div className="column">
                {/*@ts-ignore*/}
              {repo &&<BranchTable repo={repo} />}
            </div>
        </React.Fragment>
    );
};

export default UserRepo;
