'use client';

import { cookieStorageManager } from '@chakra-ui/color-mode';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { customTheme } from 'components/theme';

export default function ChakraUIWrapper({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider colorModeManager={cookieStorageManager} theme={customTheme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
}
