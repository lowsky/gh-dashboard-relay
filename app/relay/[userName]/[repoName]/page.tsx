import { getAccessToken } from '../../../lib/getAccessToken';
import RelayRoot from './RelayRoot';

const RelayRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return <RelayRoot authToken={authToken} />;
};
export default RelayRepoRoot;
