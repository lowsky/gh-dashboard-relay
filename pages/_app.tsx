import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { themeConfig } from '../components/theme';
import { NavBar } from '../components/NavBar';
import DirectorLayout from '../components/DirectorLayout';

export const customTheme = extendTheme({ ...themeConfig });

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <header>
                <NavBar />
            </header>

            <DirectorLayout>
                <Component {...pageProps} />
            </DirectorLayout>
        </ChakraProvider>
    );
}
