import React from 'react';
import PropTypes from 'prop-types';

const card = {
    width: '320px',
};

const titleBg = url => {
    return {
        color: '#fff',
        backgroundImage: `url("${url}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };
};

const User = ({ user = {} }) => {
    const { avatar_url, login = '?', company } = user;

    return (
        <div className="mdl-card mdl-shadow--2dp" style={{ ...card, ...titleBg(avatar_url) }}>
            <div className="mdl-card__title mdl-card--expand" />
            <div className="mdl-card__actions">
                <span className="demo-card-image__filename"><b>{login}</b> {company}</span>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        avatar_url: PropTypes.string,
        company: PropTypes.string,
        login: PropTypes.string,
    }),
};

export default User;
