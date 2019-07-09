import React from 'react';
import PropTypes from 'prop-types';

import gitBranchSvgUrl from '../components/octicon-git-branch.svg';

const User = ({ user = {} }) => {
    const { avatar_url = gitBranchSvgUrl, login = '?', company } = user;

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={avatar_url} alt="avatar" />
                        </figure>
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
