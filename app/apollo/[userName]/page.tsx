import { getAccessToken } from '../../lib/getAccessToken';
import InternalLink from 'components/InternalLink';
import ApolloRoot from './ApolloRoot';

const ApolloUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return (
        <>
            <InternalLink href="/apollo">back to shortcut list</InternalLink>
            <br />

            <ApolloRoot authToken={authToken} />
        </>
    );
};
export default ApolloUserRoot;
