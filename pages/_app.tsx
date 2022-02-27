import { NavBar } from '../components/NavBar';

import 'bulma/css/bulma.css';
import './main.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    );
}
