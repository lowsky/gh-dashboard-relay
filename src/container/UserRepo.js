import React from 'react';
import PropTypes from 'prop-types';

import { UILibContext } from '../components';

let UserRepo = ({ github = {} }) => {
    const { user, repo = { branches: [] } } = github;
    return (
        <UILibContext.Consumer>
            {({ Repo, User, BranchTable }) => (
                <React.Fragment>
                    <Repo repo={repo} />
                    <User user={user} />
                    <div className="column">
                        <BranchTable repo={repo} />
                    </div>
                </React.Fragment>
            )}
        </UILibContext.Consumer>
    );
};
UserRepo.propTypes = {
    github: PropTypes.object.isRequired,
};

export default UserRepo;
