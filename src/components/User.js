import React from 'react';

const card = {
    height: '100%',
    width: '100%'
};

const titleBg = (url) => {
    return {
        color: '#fff',
        background: `url(${url}) no-repeat`,
        // background: 'url(./assets/images/lowsky.jpeg) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
};

const User = props => {
    const { user = {} } = props;

    const {
        avatar_url,
        login = '?',
        company
    } = user;

    return (

        // <div className="mdl-card mdl-shadow--2dp">
        //     <div className="mdl-card__title">
        //         <h2 className="mdl-card__title-text">Owner</h2>
        //     </div>
        //     <div className="mdl-card__media">
        //         <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" src={ avatar_url }>
        //             <img src={ avatar_url } className="thumbnail" style={ imgStyle }/>
        //             {/*<h3 style={ userLoginStyle }>{ login }</h3> { company }*/}
        //         </a>
        //     </div>
        // </div>

        <div className="mdl-card mdl-shadow--2dp" style={card}>
            <div className="mdl-card__title mdl-card--expand" style={titleBg(avatar_url)}>
                <h2 className="mdl-card__title-text">Owner</h2>
            </div>
            <div className="mdl-card__supporting-text">
                { login }@{ company }
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Login
                </a>
            </div>
        </div>
    );
};

export default User;
