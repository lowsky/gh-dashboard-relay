import { getAccessToken } from '../../lib/getAccessToken';
import RelayRoot from './RelayRoot';
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from 'components/ui/breadcrumb';

const RelayUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return null;
    }
    return (
        <>
            <BreadcrumbRoot size="lg">
                <BreadcrumbLink href="/">
                    <LuHouse />
                    Home
                </BreadcrumbLink>
                <BreadcrumbLink href="/relay">Relay</BreadcrumbLink>
                <BreadcrumbCurrentLink>user</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
            <br />

            <RelayRoot authToken={authToken} />
        </>
    );
};
export default RelayUserRoot;
