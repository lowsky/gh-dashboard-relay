import React from 'react';

import RichErrorBoundary from 'components/RichErrorBoundary';
import RelayRoot from './RelayRoot';
import { getAccessToken } from '../../app/lib/getAccessToken';

const RelayUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        console.log('NO authToken');
        return <>Empty - no auth token</>;
    }
    return (
        <RichErrorBoundary>
            <RelayRoot authToken={authToken} />
        </RichErrorBoundary>
    );
};
export default RelayUserRoot;
