import React from 'react';

const card = {
    width: '320px',
    float: 'left',
};

const Repo = props => {
    const { repo = {} } = props;
    const { owner = {}, name } = repo;

    return (
        <div className="mdl-card mdl-shadow--2dp" style={card}>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Repository</h2>
            </div>
            <div className="mdl-card__supporting-text">
                {owner.login} / {name}
            </div>
            <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">link</i>
                </button>
            </div>
        </div>
    );
};

export default Repo;
