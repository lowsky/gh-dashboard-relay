'use client';

import { cookieStorageManager } from '@chakra-ui/color-mode';
import { ChakraProvider } from '@chakra-ui/react';

import { customTheme } from 'components/theme';

export default function ChakraUIWrapper({ children }) {
    return (
        <ChakraProvider colorModeManager={cookieStorageManager} theme={customTheme}>
            {children}
        </ChakraProvider>
    );
}
