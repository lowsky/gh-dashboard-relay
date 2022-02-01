import { NavBar } from '../components/NavBar';

import 'bulma/css/bulma.css';
import './main.css';

import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
