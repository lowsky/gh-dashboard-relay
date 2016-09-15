import React from 'react';

import Repo from '../relay/Repo';
import User from '../relay/User';
import BranchesTable from '../relay/BranchesTable';

let UserRepo = props => {
    const { github = {} } = props;

    return (
        <div>
            <div className="panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title"> Repository: </h1>
                </div>
                <div className="panel-body">
                    <Repo repo={github.repo}/>
                </div>
            </div>
            <div className="panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">Owner:</h1>
                </div>
                <div className="panel-body">
                    <User user={github.user}/>
                </div>
            </div>
            <div className="panel-default">
                <div className="panel-body">
                    <BranchesTable repo={github.repo}/>
                </div>
            </div>
        </div>);
};

export default UserRepo;
