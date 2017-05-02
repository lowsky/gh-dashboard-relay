import React from 'react';

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
        <div className="mdl-grid" style={cards}>
            <div className="mdl-cell mdl-cell--6-col"><Repo repo={repo} /></div>
            <div className="mdl-cell mdl-cell--6-col"><User user={user} /></div>
            <div className="mdl-cell mdl-cell--12-col"><BranchesTable repo={github.repo} /></div>
        </div>
    );
};

export default UserRepo;
