import { getAccessToken } from '../../../lib/getAccessToken';

import Root from './Root';

const RelayRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return null;
    }
    return <Root authToken={authToken} />;
};
export default RelayRepoRoot;
