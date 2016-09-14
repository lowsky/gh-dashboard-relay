import React from 'react';

const User = React.createClass({
    render: function () {
        const { user = {} } = this.props;

        const style = { display:'inline', marginBottom:'auto' };
        const userLoginStyle  = { display:'inline', padding:'10px' };

        return (
            <div className="row">
                <div className="col col-1">
                    <a className="thumbnail" src={ user.avatar_url } role="button">
                        <img src={ user.avatar_url } className="thumbnail" style={ style }/>
                        <h3 style={ userLoginStyle }>{ user.login }</h3>
                        { user.company }
                    </a>
                </div>
            </div>);
    }
});

export default User;
