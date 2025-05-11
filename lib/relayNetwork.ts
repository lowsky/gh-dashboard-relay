import { FetchFunction, type GraphQLResponse, INetwork, Network, Observable } from 'relay-runtime';

import { meros } from 'meros';
import type { ExecutionPatchResult, Sink } from 'graphql-ws';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const streamableClientSideFetchQuery: FetchFunction = (params, variables, _cacheConfig) =>
    Observable.create((sink: Sink<GraphQLResponse>) => {
        (async () => {
            const endpoint = '/api/graphql';
            // try accessing the graphql-endpoint on the server or client
            // at a different URL:
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: params.text,
                    variables,
                }),
                credentials: 'same-origin',
            });
            const parts = await meros<ExecutionPatchResult>(response);

            if (isAsyncIterable(parts)) {
                for await (const part of parts) {
                    if (!part.json) {
                        sink.error(new Error('Failed to parse part as json.'));
                        break;
                    }
                    sink.next(part.body as GraphQLResponse);
                }
            } else {
                const promise = parts.json();
                const value = await promise;
                sink.next(value);
            }

            sink.complete();
        })();
    });

/**
 * Not sure if this will still be needed - because without our own server that was supporting
 * streaming and use of @defer - it might not be necessary anymore.
 *
 * Needs a little more investigation, so this will be kept for the moment.
 *
 * @deprecated
 */
export function network(): INetwork {
    return Network.create(streamableClientSideFetchQuery);
}

// Type Guard
function isAsyncIterable(input: unknown): input is AsyncIterable<unknown> {
    return (
        typeof input === 'object' &&
        input !== null &&
        // Some browsers still don't have Symbol.asyncIterator implemented (iOS Safari)
        // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction
        // (async function * () {})
        (input[Symbol.toStringTag] === 'AsyncGenerator' || Symbol.asyncIterator in input)
    );
}
