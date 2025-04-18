import { FetchFunction, type GraphQLResponse, INetwork, Network, Observable, PayloadError } from 'relay-runtime';

import { meros } from 'meros';
import { type ExecutionResult, graphql, GraphQLError } from 'graphql';
import type { ExecutionPatchResult, Sink } from 'graphql-ws';

import { schema } from 'pages/api/graphql';
import { isServerSideRendering } from 'lib/isServerSideRendering';
import { getUnauthorizedGitHub } from '../restinpeace/github';

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

const serverSideFetchQuery: FetchFunction = (params, variables, _cacheConfig) =>
    Observable.create((sink: Sink<GraphQLResponse>) => {
        (async () => {
            const graphqlOp: Promise<ExecutionResult> = graphql({
                schema,
                source: params.text ?? '',
                variableValues: variables,
                contextValue: {
                    getAuthorizedGitHub: getUnauthorizedGitHub,
                },
            });
            const value: ExecutionResult = await graphqlOp;

            const errors: ReadonlyArray<GraphQLError> | undefined = value.errors;
            // Types of property locations are incompatible.
            const errs: PayloadError | PayloadError[] = errors!.map((e) => {
                return { message: isServerSideRendering() ? 'server:' : 'client:' + e.message };
            });

            sink.next({ ...value, data: value.data ?? {}, errors: errs });
            sink.complete();
        })();
    });

export function network(): INetwork {
    if (isServerSideRendering()) {
        return Network.create(serverSideFetchQuery);
    } else {
        return Network.create(streamableClientSideFetchQuery);
    }
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
