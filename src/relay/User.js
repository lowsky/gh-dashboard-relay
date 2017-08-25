import { createFragmentContainer, graphql } from 'react-relay';
import * as React from 'react';

const User = ({ user = {} }) => {
    const { login = '?', company } = user;

    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-c2ard--expand" />
            <div className="mdl-card__actions">
                <span className="demo-card-image__filename">
                    <b>{login}</b> {company}
                </span>
            </div>
        </div>
    );
};

export default createFragmentContainer(
    User,
    graphql`
        fragment User_user on GithubUser {
            login
            company
            avatar_url
        }
    `
);
