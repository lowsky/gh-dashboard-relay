import { NavBar } from '../components/NavBar';

import * as React from 'react';

import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { themeConfig } from '../components/theme';

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
                    <Component {...pageProps} />
                </Box>
            </ChakraMdxProvider>
        </ChakraProvider>
    );
}
