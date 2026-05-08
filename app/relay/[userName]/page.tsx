import { getAccessToken } from '../../lib/getAccessToken';
import RelayRoot from './RelayRoot';
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'components/ui/breadcrumb';

const RelayUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return <>Empty - no auth token</>;
    }
    return (
        <>
            <BreadcrumbRoot>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                <BreadcrumbLink href="/relay">Relay</BreadcrumbLink>
                <BreadcrumbCurrentLink>user</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
            <br />

            <RelayRoot authToken={authToken} />
        </>
    );
};
export default RelayUserRoot;
