import React from 'react';
import PropTypes from 'prop-types';

import Ui from '../components';

const cards = {
    // height: '400px'
};

let UserRepo = props => {
    const { github = {} } = props;
    const { user, repo = { branches: [] } } = github;

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
    );
};
UserRepo.propTypes = {
    github: PropTypes.object,
    relay: PropTypes.object,
};

export default UserRepo;
