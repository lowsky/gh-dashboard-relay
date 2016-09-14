import React from 'react';
import Relay from 'react-relay';

const Repo = React.createClass({
    render: function () {
        const {repo} = this.props;
        const {owner = {}, name} = repo;

        return (<div> {owner.login} / {name} </div>);
    }
});

export default Relay.createContainer(Repo, {
    fragments: {
        repo: () => Relay.QL`
            fragment on GithubRepo {
                name
                owner {
                    login
                }
            }
        `
    }
});
