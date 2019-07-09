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
    github: PropTypes.shape({
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
