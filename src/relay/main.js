import React from 'react';
import ReactDOM from 'react-dom';

import Relay from 'react-relay';

import BranchesTable  from '../relay/BranchesTable';
import User from '../relay/User';

import UserRepo from './UserRepo';
import RepoContainer from './Repo';

let content = document.getElementById('content');

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
        fetchTimeout: 45000,   // Timeout after 30s.
        retryDelays: [3000]   // Only retry once after a 5s delay.
    })
);


let UserRepoContainer = Relay.createContainer(UserRepo, {
    initialVariables: {
        username: 'lowsky',
        ownerUsername: 'lowsky',
        repoName: 'dashboard'
    },
    fragments: {
        github: () => Relay.QL`
          fragment on GithubAPI {
            user(username:$username) {
                ${User.getFragment('user')}
            }
            repo(ownerUsername: $ownerUsername, name: $repoName) {
                 ${RepoContainer.getFragment('repo')}
                 ${BranchesTable.getFragment('repo')}
            }
          }
        `
    },
    name: 'UserRepo'
});


let relayRoot = (
    <Relay.RootContainer
        Component={UserRepoContainer}
            renderLoading={function() {
                return <div>Loading...</div>;
            }}
            renderFailure={function(error, retry) {
                console.error(error, error);
                return (
                    <div>
                        <p>Error: {error.message}</p>
                        <p><button onClick={retry}>Retry?</button></p>
                    </div>
                );
            }}
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
    />
);

let renderOrUpdateBranches = () => {
    ReactDOM.render(
        <div className="panel-default">
            {
                relayRoot
            }
        </div>,
        content);
};

renderOrUpdateBranches([]);

/*
requestAndShowBranches().send();
*/

// old:
// https://api.github.com/repos/lowsky/dashboard/branches
