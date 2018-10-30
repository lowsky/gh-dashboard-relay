import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user = {} }) => {
    const { avatar_url, login = '?', company } = user;

    console.log('Debug: avatar-url', avatar_url);

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            {false && <img src={avatar_url} alt="avatar" /> }
                        </figure>
                        avatar_url: {avatar_url}
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{login}</p>
                        <p className="subtitle is-6">{company}</p>
                    </div>
                </div>
                <div className="content">Owner</div>
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
