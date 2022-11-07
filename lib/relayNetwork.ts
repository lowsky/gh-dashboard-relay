import { Network, Observable } from 'relay-runtime';

import fetchMultipart from 'fetch-multipart-graphql';

// Define a function that fetches the results of an operation (query/mutation/etc.)
// and returns its results as a Promise
function fetchQuery(operation, variables) {
    return Observable.create((sink) => {
        fetchMultipart(process.env.NEXT_PUBLIC_RELAY_ENDPOINT ?? '/api/graphql', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: operation.text,
                variables,
            }),
            credentials: 'same-origin',

            onNext: (parts) => sink.next(parts),
            onError: (err) => sink.error(err as Error), //wrap it later
            onComplete: () => sink.complete(),
        });
    });
}

export const network = Network.create(fetchQuery);
