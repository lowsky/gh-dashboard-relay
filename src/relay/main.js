import React from 'react';
import Relay from 'react-relay';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

import UserRepo from './UserRepo';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
    return fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
});

const environment = new Environment({
    network,
    store,
});

const GithubQuery = Relay.graphql`
    query mainQuery {
        github {
            ...UserRepo_github
        }
    }
`;

let relayRoot = () =>
    <Relay.QueryRenderer
        environment={environment}
        query={GithubQuery}
        render={({ error, props }) => {
            if (error) {
                console.error('Failure while rendering in relay root container:', error);
                return (
                    <div>
                        {error.message}
                    </div>
                );
            } else if (props) {
                return (
                    <div>
                        <UserRepo github={props.github} />
                    </div>
                );
            }
            return <div>Loading</div>;
        }}
    />;

export default relayRoot;
