import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { themeConfig } from '../components/theme';
import { NavBar } from '../components/NavBar';
import CacheDirectorLayout from '../components/DirectorLayout';
import { UILibPureComponents } from '../components';
import UILibContext from '../components/UILibContext';
import { NextRouter, useRouter } from 'next/router';

export const customTheme = extendTheme({ ...themeConfig });

const routesWithCacheOverlay = [
    '/wait-for-all',
    '/waterfall',
    '/side-by-side',
    // ...
];
const matchRoutePrefix = (r: NextRouter) => (prefix) => r.pathname.startsWith(prefix);

export default function App({ Component, pageProps }) {
    const r = useRouter();
    const routeWithCache = Boolean(routesWithCacheOverlay.find(matchRoutePrefix(r)));

    return (
        <ChakraProvider theme={customTheme}>
            <header>
                <NavBar />
            </header>

            {routeWithCache && (
                <CacheDirectorLayout>
                    <UILibContext.Provider value={UILibPureComponents}>
                        <Component {...pageProps} />
                    </UILibContext.Provider>
                </CacheDirectorLayout>
            )}

            {!routeWithCache && (
                <UILibContext.Provider value={UILibPureComponents}>
                    <Component {...pageProps} />
                </UILibContext.Provider>
            )}
        </ChakraProvider>
    );
}
