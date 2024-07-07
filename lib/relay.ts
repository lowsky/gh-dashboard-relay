import { useMemo } from 'react';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';

import { network } from './relayNetwork';
import { isServerSideRendering } from './isServerSideRendering';

const STORE_ENTRIES = 150;
const STORE_CACHE_RELEASE_TIME = 2 * 60 * 1000; // 2 mins

let relayEnvironment: any;

function createEnvironment() {
    const source = new RecordSource();
    const store = new Store(source, {
        gcReleaseBufferSize: STORE_ENTRIES,
        queryCacheExpirationTime: STORE_CACHE_RELEASE_TIME,
    });
    return new Environment({
        network,
        store,
    });
}

export function initEnvironment(initialRecords?: RecordMap) {
    const environment = relayEnvironment ?? createEnvironment();

    // If your page has Next.js data fetching methods that use Relay, the initial records
    // will get hydrated here
    if (initialRecords) {
        environment.getStore().publish(new RecordSource(initialRecords));
    }
    // For SSG and SSR always create a new Relay environment
    if (isServerSideRendering()) {
        return environment;
    }

    // Create the Relay environment once in the client
    if (!relayEnvironment) {
        relayEnvironment = environment;
    }

    return relayEnvironment;
}

export function useEnvironment(initialRecords: RecordMap) {
    return useMemo(() => initEnvironment(initialRecords), [initialRecords]);
}
