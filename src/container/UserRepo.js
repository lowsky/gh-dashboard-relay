import React from 'react';

import Ui from '../components';

let UserRepo = (props) => {
    const {github = {}} = props;
    const {user, repo = { branches: [] }}  = github;

    const User = Ui.createUser(props);
    const Repo = Ui.createRepo(props);
    const BranchesTable = Ui.createBranchTable(props);

    return (
        <div>
            <div className="panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title"> Repository: </h1>
                </div>
                <div className="panel-body">
                    {
                        <Repo repo={repo}/>
                    }
                </div>
            </div>
            <div className="panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">Owner:</h1>
                </div>
                <div className="panel-body">
                    {
                        <User user={user}/>
                    }
                </div>
            </div>
            <div className="panel-default">
                <div className="panel-body">
                    {
                        <BranchesTable repo={repo}/>
                    }
                </div>
            </div>
        </div>);
};

export default UserRepo;
