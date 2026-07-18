import { getAccessToken } from '../../../lib/getAccessToken';
import Root from './Root';

const RelayRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return <Root authToken={authToken} />;
};
export default RelayRepoRoot;
