import { MockLink } from '@apollo/client/testing';
import apolloClient from 'storybook-addon-apollo-client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { typePolicies } from 'lib/apollo';

export default () =>
    apolloClient({
        createClient: ({
            mocks = [],
            showWarnings = true,
        }: {
            mocks?: ReadonlyArray<MockLink.MockedResponse>;
            showWarnings?: boolean;
        }) =>
            new ApolloClient({
                cache: new InMemoryCache({ typePolicies }),
                link: new MockLink(mocks, { showWarnings }),
            }),
    });
