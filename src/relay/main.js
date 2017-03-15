import React from 'react';
import ReactDOM from 'react-dom';

import Relay from 'react-relay';

import UserRepo from './UserRepo';

let content = document.getElementById('relay-content');

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
        fetchTimeout: 45000,   // Timeout after 30s.
        retryDelays: [3000]   // Only retry once after a 5s delay.
    })
);

let relayRoot = (
    <Relay.RootContainer
        Component={UserRepo}
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
                name: 'UserRepoBranches',
                params: {
                    extraProps: 'availableInAnyClientRender'
                }
            }
            }
    />
);

let renderOrUpdateBranches = () => {
    if (content) {
        ReactDOM.render(
            <div className="panel-default">
                {
                    relayRoot
                }
            </div>,
            content);
    }
};

renderOrUpdateBranches();

// hot-module-reloading
if (module.hot) {
    module.hot.accept('../container/UserRepo', () => {
        renderOrUpdateBranches();
    });
}

// old:
// https://api.github.com/repos/lowsky/dashboard/branches
