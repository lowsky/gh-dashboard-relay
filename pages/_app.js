import 'bulma/css/bulma.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { useEnvironment } from '../lib/relay';

import { NavBar } from '../components/NavBar';

import './main.css'

export default function App({ Component, pageProps }) {
    const environment = useEnvironment(pageProps.initialRecords);

    return (
        <RelayEnvironmentProvider environment={environment}>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </RelayEnvironmentProvider>
    );
}
