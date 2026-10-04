import { getAccessToken } from '../../lib/getAccessToken';
import ApolloRoot from './ApolloRoot';

import Breadcrumbs, { NavItems } from 'components/Breadcrumbs';
import { NavBar } from 'components/NavBar';

const ApolloUserRoot = async () => {
    const authToken = await getAccessToken();
    if (!authToken) {
        return null;
    }
    const items: NavItems = [{ label: 'Apollo', href: '/apollo' }, { label: 'User' }];
    return (
        <>
            <NavBar navItems={items} />
            <Breadcrumbs items={items} />
            <br />
            <ApolloRoot authToken={authToken} />
        </>
    );
};
export default ApolloUserRoot;
