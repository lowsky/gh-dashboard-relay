import React from 'react';
import Relay from 'react-relay';
import RelayLocalSchema from 'relay-local-schema/lib/classic';

import UserRepo from './UserRepo';

import Schema from './localSchema';

const localSchema = false;

/* eslint-disable prettier/prettier */
if (localSchema) {
    Relay.injectNetworkLayer(
        new RelayLocalSchema.NetworkLayer({
            schema: Schema,
            rootValue: 'foo',
            onError: (errors, request) => console.error(errors, request),
        })
    );
} else Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:3000/graphql', {
        fetchTimeout: 45000, // Timeout after 30s.
        retryDelays: [3000], // Only retry once after a 5s delay.
    })
);

let relayRoot = () =>
    <Relay.RootContainer
        Component={UserRepo}
        renderLoading={() => <div>Loading...</div>}
        renderFailure={(error, retry) => {
            console.error('Failure while rendering in relay root container:', error);
            return (
                <div>
                    <p>
                        Error: {error.message}
                    </p>
                    <p>
                        <button onClick={retry}>Retry?</button>
                    </p>
                </div>
            );
        }}
        route={{
            queries: {
                github: () => Relay.QL`
                        query { github }
                    `,
            },
            name: 'UserRepoBranches',
            params: {
                extraProps: 'availableInAnyClientRender',
            },
        }}
    />;

export default relayRoot;
