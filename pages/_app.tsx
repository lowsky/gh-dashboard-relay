import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { themeConfig } from '../components/theme';
import { NavBar } from '../components/NavBar';
import DirectorLayout from '../components/DirectorLayout';
import { UILibPureComponents } from '../components';
import UILibContext from '../components/UILibContext';

export const customTheme = extendTheme({ ...themeConfig });

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <header>
                <NavBar />
            </header>

            <DirectorLayout>
                <UILibContext.Provider value={UILibPureComponents}>
                    <Component {...pageProps} />
                </UILibContext.Provider>
            </DirectorLayout>
        </ChakraProvider>
    );
}
