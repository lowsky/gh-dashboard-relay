'use client';
import { type FetchFunction, type GraphQLResponse, Network, Observable } from 'relay-runtime';
import { meros } from 'meros';
import { type ExecutionResult, graphql } from 'graphql';
import type { ObjMap } from 'graphql/jsutils/ObjMap';
import type { ExecutionPatchResult } from 'graphql-ws';

import { schema } from 'pages/api/graphql';
import { getAuthorizedGitHub } from 'restinpeace/github';
import { isServerSideRendering } from 'lib/isServerSideRendering';

const fetchQuery: FetchFunction = (params, variables, _cacheConfig) => {
    return Observable.create((sink) => {
        if (isServerSideRendering()) {
            (async () => {
                const graphqlOp: Promise<ExecutionResult> = graphql({
                    schema,
                    source: params.text ?? '',
                    variableValues: variables,
                    contextValue: {
                        // TODO adding auth an be added later if needed.
                        getAuthorizedGitHub,
                    },
                });
                const value: ExecutionResult<ObjMap<unknown>, ObjMap<unknown>> = await graphqlOp;
                const errors = value.errors ?? [];
                // @ts-expect-error errors cannot be assigned to non-readonly field
                sink.next({ ...value, data: value.data ?? {}, errors });
                sink.complete();
            })();
        } else {
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
                    const value: any = await promise;
                    sink.next(value);
                }

                sink.complete();
            })();
        }
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
