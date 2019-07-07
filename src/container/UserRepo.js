import React from 'react';
import PropTypes from 'prop-types';

import { UILibContext } from '../components';

let UserRepo = props => {
    const { github = {} } = props;
    const { user, repo = { branches: [] } } = github;
    <UILibContext.Consumer>
        {({ Repo, User, BranchTable }) => (
    const User = Ui.createUser(props);
    const Repo = Ui.createRepo(props);
    const BranchesTable = Ui.createBranchTable(props);

    return (
        <React.Fragment>
            <Repo repo={repo} />
            <User user={user} />
            <div className="column">
                <BranchesTable repo={repo} />
            </div>
        </React.Fragment>
        )}
    </UILibContext.Consumer>
);

UserRepo.propTypes = {
    github: PropTypes.object.isRequired,
};

export default UserRepo;
