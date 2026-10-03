import { getAccessToken } from '../../../lib/getAccessToken';

import Root from './Root';

const ApolloRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return null;
    }
    return <Root authToken={authToken} />;
};
export default ApolloRepoRoot;
