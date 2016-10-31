import React from 'react';

const imgStyle = {
    display: 'inline',
    marginBottom: 'auto'
};
const userLoginStyle = {
    display: 'inline',
    padding: '10px'
};

const User = props => {
    const { user = {} } = props;

    const {
        avatar_url,
        login = '?',
        company
    } = user;

    return (
        <div className="row">
            <div className="col col-1">
                <a className="thumbnail" src={ avatar_url } role="button">
                    <img src={ avatar_url } className="thumbnail" style={ imgStyle }/>
                    <h3 style={ userLoginStyle }>{ login }</h3>
                    { company }
                </a>
            </div>
        </div>);
};

export default User;
