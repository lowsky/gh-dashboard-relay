import React from 'react';
import { QueryRenderer } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';

import UserRepo from './UserRepo';
import { WarningMissingURLParams } from '../routes';
import { UILibWithRelaySupport } from '../components';
import UILibContext from '../components/UILibContext';

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
    }).then((response) => {
        return response.json();
    });
});

const environment = new Environment({
    network,
    store,
});

const GithubQuery = graphql`
    query mainQuery($userName: String!, $repoName: String!) {
        github {
            ...UserRepo_github @arguments(userName: $userName, repoName: $repoName)
        }
    }
`;

const RelayRoot = ({ match: { params } }) => {
    if (!params?.userName) {
        return WarningMissingURLParams;
    }
    return (
        <QueryRenderer
            variables={{
                userName: params?.userName,
                repoName: params?.repoName,
            }}
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
                        // @ts-ignore
                        <UILibContext.Provider value={UILibWithRelaySupport}>
                            <div className="box">
                                {
                                    // @ts-ignore
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
};

export default RelayRoot;
