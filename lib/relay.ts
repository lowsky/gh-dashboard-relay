import { useMemo } from 'react';
import { RecordMap, IEnvironment, Environment, INetwork, RecordSource, Store } from 'react-relay';

import { network } from './relayNetwork';

const STORE_ENTRIES = 250;
const STORE_CACHE_RELEASE_TIME = 10 * 1000; // 10 seconds

const IS_SERVER = typeof window === typeof undefined;

function createEnvironment(network: INetwork): IEnvironment {
    const source = new RecordSource();
    const store = new Store(source, {
        gcReleaseBufferSize: STORE_ENTRIES,
        queryCacheExpirationTime: STORE_CACHE_RELEASE_TIME,
    });
    return new Environment({
        network,
        store,
        isServer: IS_SERVER,
    });
}

function initEnvironment(network: INetwork, initialRecords?: RecordMap): IEnvironment {
    const environment = createEnvironment(network);

    // If your page has Next.js data fetching methods that use Relay, the initial records
    // will get hydrated here
    if (initialRecords) {
        environment.getStore().publish(new RecordSource(initialRecords));
    }

    return environment;
}

export function useEnvironment(initialRecords: RecordMap): IEnvironment {
    return useMemo(() => initEnvironment(network(), initialRecords), [initialRecords]);
}
