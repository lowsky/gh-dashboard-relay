import { getAccessToken } from '../../../lib/getAccessToken';

import Root from './Root';

const ApolloRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return <Root authToken={authToken} />;
};
export default ApolloRepoRoot;
