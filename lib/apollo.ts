import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GITHUB_API_URL = 'https://api.github.com/graphql';

// Create a function to get the Apollo Client instance
export function getApolloClient(authToken?: string): ApolloClient<NormalizedCacheObject> {
    // Create the HTTP link
    const httpLink = createHttpLink({
        uri: GITHUB_API_URL,
    });

    // Create the auth link
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: authToken ? `Bearer ${authToken}` : '',
            },
        };
    });

    // Create the cache
    const cache = new InMemoryCache({
        typePolicies: {
            User: {
                fields: {
                    repositories: {
                        // Configure pagination for repositories
                        keyArgs: ['ownerAffiliations'],
                        merge(existing = { edges: [] }, incoming) {
                            return {
                                ...incoming,
                                edges: [...existing.edges, ...incoming.edges],
                            };
                        },
                    },
                },
            },
        },
    });

    // Create and return the Apollo Client instance
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache,
        defaultOptions: {
            query: {
                fetchPolicy: 'network-only',
            },
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
        },
    });
}
