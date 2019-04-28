import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { UILibContext } from '../components';
import UserWithPropTypes from '../components/User';

interface UserRepoProps {
    github: any;
    relay?: any;
}

let UserRepo = (props:UserRepoProps) => {
    const { github = {} } = props;
    const { user, repo = { branches: [] } } = github;
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
UserRepo.propTypes = {
    github: PropTypes.shape({
        user: UserWithPropTypes.propTypes,
        branch: PropTypes.shape({
            name: PropTypes.string,
            lastCommit: PropTypes.object,
        }),
        repo: PropTypes.shape({
            branches: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    lastCommit: PropTypes.object,
                })
            ),
        }),
    }),
};

export default UserRepo;
