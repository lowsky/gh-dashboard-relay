import React from 'react';

import Ui from '../components';

let UserRepo = (props) => {
    const {github = {}} = props;
    const {user, repo = { branches: [] }}  = github;

    const User = Ui.createUser(props);
    const Repo = Ui.createRepo(props);
    const BranchesTable = Ui.createBranchTable(props);

    componentDidMount: () => window.componentHandler.upgradeElement(this.root);

    componentWillUnmount: () => window.componentHandler.downgradeElements(this.root);

    return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Welcome</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Get Started
                    </a>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                    </button>
                </div>
            </div>
    );

};

export default UserRepo;
