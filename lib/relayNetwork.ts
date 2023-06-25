import { FetchFunction, GraphQLResponse, Network, Observable } from 'relay-runtime';
import { meros } from 'meros';

import type { ExecutionPatchResult } from 'graphql-ws';

// Define a function that fetches the results of an operation (query/mutation/etc.)
const fetchQuery: FetchFunction = (params, variables, _cacheConfig) => {
    return Observable.create((sink) => {
        (async () => {
            const response = await fetch('/api/graphql', {
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
                sink.next(await parts.json());
            }

            sink.complete();
        })();
    });
};

export const network = Network.create(fetchQuery);

// Type Guard
function isAsyncIterable(input: unknown): input is AsyncIterable<unknown> {
    return (
        typeof input === 'object' &&
        input !== null &&
        // Some browsers still don't have Symbol.asyncIterator implemented (iOS Safari)
        // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction
        // (async function * () {})
        ((input as any)[Symbol.toStringTag] === 'AsyncGenerator' || Symbol.asyncIterator in input)
    );
}
