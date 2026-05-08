import { getAccessToken } from '../../../lib/getAccessToken';

import ApolloRoot from './ApolloRoot';

const ApolloRepoRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return <ApolloRoot authToken={authToken} />;
};
export default ApolloRepoRoot;
