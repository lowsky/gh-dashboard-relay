import {
    CacheConfig,
    Environment,
    GraphQLResponse,
    IEnvironment,
    INetwork,
    Network,
    QueryResponseCache,
    RecordSource,
    RequestParameters,
    Store,
    Variables,
} from 'relay-runtime';

const STORE_ENTRIES = 250;
const STORE_CACHE_RELEASE_TIME = 10 * 1000; // 10 seconds

const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

const IS_SERVER = typeof window === typeof undefined;

/* new one */
export async function networkFetch(
    request: RequestParameters,
    variables: Variables,
    auth: string = 'not-authenticated'
): Promise<GraphQLResponse> {
    //const access_token = (await cookies()).get('access_token')?.value;
    console.log('fetchGraphQL auth', auth);
    console.log('fetchGraphQL is server', IS_SERVER);

    const HTTP_ENDPOINT = 'https://api.github.com/graphql';

    const resp = await fetch(HTTP_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `bearer ${auth}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: request.text,
            variables,
        }),
    });
    const json = await resp.json();

    //resp.headers.forEach((value, name) => console.log('header', name, value));
    console.log('github-authentication-token-expiration', resp.headers.get('github-authentication-token-expiration'));
    console.log(
        'github-authentication-token-expiration',
        new Date(resp.headers.get('github-authentication-token-expiration'))
    );

    if (resp.status === 401) {
        const error = Error('Authentification failed');

        error.details = 'Authentification failed, Response status: ' + resp.status + ' ' + resp.statusText;
        // x-ratelimit-remaining: 0
        // x-ratelimit-limit: 5000
        // x-ratelimit-remaining: 4997
        // x-ratelimit-reset: 1746096673
        // github-authentication-token-expiration: 2025-05-01 17:57:50 UTC
        console.error(error);

        throw error;
    }

    // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
    // property of the response. If any exceptions occurred when processing the request,
    // throw an error to indicate to the developer what went wrong.
    if (Array.isArray(json.errors)) {
        console.error('error while running graphql operation:', json.errors);
        throw new Error(
            `Error fetching GraphQL query '${
                request.name
            }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(json.errors)}`
        );
    }

    return json;
}

const responseCache: QueryResponseCache | null = IS_SERVER
    ? null
    : new QueryResponseCache({
          size: 100,
          ttl: CACHE_TTL,
      });

function createNetwork(auth?: string) {
    async function fetchResponse(params: RequestParameters, variables: Variables, cacheConfig: CacheConfig) {
        const isQuery = params.operationKind === 'query';
        const cacheKey = params.id ?? params.cacheID;

        console.log('Hey this is cahce config', cacheConfig);

        const forceFetch = cacheConfig && cacheConfig.force;
        if (responseCache != null && isQuery && !forceFetch) {
            const fromCache = responseCache.get(cacheKey, variables);
            if (fromCache != null) {
                return Promise.resolve(fromCache);
            }
        }

        return networkFetch(params, variables, auth);
    }

    return Network.create(fetchResponse);
}

function createEnvironment(network: INetwork): IEnvironment {
    const source = RecordSource.create();
    const store = new Store(source, {});
    return new Environment({
        network,
        store,
        isServer: IS_SERVER,
    });
}

export function getCurrentEnvironment(auth?: string) {
    if (IS_SERVER) {
        return createEnvironment(createNetwork(auth));
    }

    return createEnvironment(createNetwork(auth));
}
