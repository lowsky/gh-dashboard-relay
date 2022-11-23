
import * as React from 'react';

import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Director } from 'hitchcock';

import { themeConfig } from '../components/theme';
import { NavBar } from '../components/NavBar';

export const customTheme = extendTheme({ ...themeConfig });

import ChakraMdxProvider from '../components/ChakraMdxProvider';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <header>
                <NavBar />
            </header>
            <ChakraMdxProvider>
                <Box p="5">
                    {!(typeof window === 'undefined') && (
                        // inject the hitchcock debug-tool for the async fetching
                        <Director>
                            <Component {...pageProps} />
                        </Director>
                    )}
                    {typeof window === 'undefined' && <Component {...pageProps} />}
                </Box>
            </ChakraMdxProvider>
        </ChakraProvider>
    );
}
