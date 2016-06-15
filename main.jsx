import React from 'react';
import ReactDOM from 'react-dom';

import Relay from 'react-relay';

const repo = 'lowsky/dashboard';

let content = document.getElementById('content');

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
        fetchTimeout: 45000,   // Timeout after 30s.
        retryDelays: [3000]   // Only retry once after a 5s delay.
    })
);

let UserRepo = React.createClass({
    render: function() {
        const user = {};
        const { github = { user }} = this.props;
        console.log(github.repo);
        return (<div>{github.user.login} = {github.user.login}
            <ul>
                {github.repo.branches.map((b)=><li>{b.name}</li>) }
            </ul>

         </div>)}
});

let UserRepoContainer = Relay.createContainer(UserRepo, {
    initialVariables: {
        username: 'lowsky',
        ownerUsername: 'lowsky',
        name: 'dashboard'
    },
    fragments: {
        github: () => Relay.QL`
          fragment on GithubAPI {
           user(username:$username) {
              login
            }
            repo(ownerUsername:$ownerUsername, name: $name) {
              branches {name}
            }
          }
        `
    },
    name: 'UserRepo'
});

let renderOrUpdateBranches = branches => {
    ReactDOM.render(
        <Relay.RootContainer
            Component={UserRepoContainer}
            route={
                {
                    queries: {
                        github: () => Relay.QL`
                            query { github }
                        `
                    },
                    name: 'UserRepo',
                    params: {
                         extraProps: 'availableInAnyClientRender'
                    }
                }
            }
    />,
    content
    ) ;
};

renderOrUpdateBranches([]);


// old:
// https://api.github.com/repos/lowsky/dashboard/branches
