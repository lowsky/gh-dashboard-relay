import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import UserRepo from './UserRepo';

import { UILibContext, UILibWithRelaySupport } from '../components';

const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
    return fetch('/.netlify/functions/graphql', {
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

const RelayRoot = () => (
    <QueryRenderer
        environment={environment}
        query={GithubQuery}
        render={({ error, props }) => {
            if (error) {
                console.error('Failure while rendering in relay root container:', error);
                return (
                    <div className="notification has-text-danger">
                        Error! While trying to load data from the server: {error.message}{' '}
                    </div>
                );
            }

            if (props) {
                return (
                    <UILibContext.Provider value={UILibWithRelaySupport}>
                        <div className="box">
                            {
                                <UserRepo github={props.github} />
                            }
                        </div>
                    </UILibContext.Provider>
                );
            }

            return (
                <div className="box">
                    <span className="icon is-large ">
                        <i className="fas fa-spinner fa-pulse" />
                    </span>
                    Loading ...
                </div>
            );
        }}
    />
);

export default RelayRoot;
