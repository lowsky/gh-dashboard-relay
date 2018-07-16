import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import UserRepo from './UserRepo';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

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

const GithubQuery = graphql`
    query mainQuery {
        github {
            ...UserRepo_github
        }
    }
`;

let relayRoot = () =>
    false ? (
        <h2>Sorry, this seems to be broken at the moment, needs a fix... !</h2>
    ) : (
        <QueryRenderer
            environment={environment}
            query={GithubQuery}
            render={({ error, props }) => {
                if (error) {
                    console.error('Failure while rendering in relay root container:', error);
                    return <div>{error.message}</div>;
                } else if (props) {
                    return (
                        <div>
                            <hr />
                            {
                                // eslint-disable-next-line react/prop-types
                                <UserRepo github={props.github} />
                            }
                        </div>
                    );
                }
                return <div>Loading</div>;
            }}
        />
    );

export default relayRoot;
