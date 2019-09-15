import React from 'react';

import gitBranchSvgUrl from '../components/octicon-git-branch.svg';

interface UserProps {
    user?: {
        avatar_url?: string;
        company?: string;
        login?: string;
    };
}

const User: React.FC<UserProps> = (props) => {
    const { user = {} } = props;
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

export default User;
