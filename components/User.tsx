import React from 'react';

export interface User {
    avatar_url?: string;
    company?: string;
    login?: string;
}

export interface UserProps {
    user?: User;
}

const User: React.FC<UserProps> = (props) => {
    const { user = {} } = props;
    const { avatar_url = '/octicon-git-branch.svg', login = '?', company } = user;

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
