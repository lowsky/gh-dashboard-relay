import { getAccessToken } from '../../lib/getAccessToken';
import RelayRoot from './RelayRoot';

import Breadcrumbs, { NavItems } from 'components/Breadcrumbs';
import { NavBar } from 'components/NavBar';

const RelayUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return null;
    }
    const items: NavItems = [{ label: 'Relay', href: '/relay' }, { label: 'User' }];
    return (
        <>
            <NavBar navItems={items} />
            <Breadcrumbs items={items} />
            <br />
            <RelayRoot authToken={authToken} />
        </>
    );
};
export default RelayUserRoot;
