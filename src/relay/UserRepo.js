import React from 'react';

import Repo from './Repo';
import User from './User';
import BranchesTable from './BranchesTable';

let UserRepo = React.createClass({
    render: function () {
        const { github = {} } = this.props;
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
            </div>)
    }
});

export default UserRepo;
