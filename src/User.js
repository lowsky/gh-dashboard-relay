import React from 'react';
import Relay from 'react-relay';

const User = React.createClass({
    render: function () {
        const { user } = this.props; // same as in // fragments ['user']

        const style = { display:"inline", marginBottom:'auto' };
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

export default Relay.createContainer(User, {
    fragments: {
        user: () => Relay.QL`
            fragment on GithubUser {
                login
                avatar_url
                company
                avatar_url
            }
        `
    },
    name: 'User'
});
