import React from 'react';
import PropTypes from 'prop-types';

const card = {
    width: '320px',
    float: 'left',
};

const Repo = ({ repo = {} }) => {
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

Repo.propTypes = {
    repo: PropTypes.shape({
        owner: PropTypes.shape({
            login: PropTypes.string,
        }),
        name: PropTypes.string,
    }),
};

export default Repo;
