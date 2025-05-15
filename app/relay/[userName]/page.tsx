import React from 'react';

import { getAccessToken } from '../../lib/getAccessToken';
import InternalLink from 'components/InternalLink';
import RelayRoot from './RelayRoot';

const RelayUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return (
        <>
            <InternalLink href="/relay">back to shortcut list</InternalLink>
            <br />

            <RelayRoot authToken={authToken} />
        </>
    );
};
export default RelayUserRoot;
