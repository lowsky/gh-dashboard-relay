import React from 'react';

const card = {
    width: '320px',
    height: '320px',
    float: 'right'
};

const titleBg = (url) => {
    return {
        color: '#fff',
        background: `url(${url}) no-repeat center cover`,
    };
};

const User = props => {
    const {user = {}} = props;

    const {
        avatar_url,
        login = '?',
        company
    } = user;

    return (
        <div className="mdl-card mdl-shadow--2dp" style={{...card, ...titleBg(avatar_url)}}>
            <div className="mdl-card__title mdl-card--expand"></div>
            <div className="mdl-card__actions">
                <span className="demo-card-image__filename"><b>{ login }</b> @{ company }</span>
            </div>
            {/*<div className="mdl-card__title mdl-card--expand" style={titleBg(avatar_url)}>*/}
                {/*<h2 className="mdl-card__title-text">Owner</h2>*/}
            {/*</div>*/}
            {/*<div className="mdl-card__supporting-text">*/}
                {/*{ login }*/}
                {/*<p>@{ company }</p>*/}
            {/*</div>*/}
        </div>
    );
};

export default User;
