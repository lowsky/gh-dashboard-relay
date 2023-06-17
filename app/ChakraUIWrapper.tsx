'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { themeConfig } from 'components/theme';

const customTheme = extendTheme({ ...themeConfig });

export default function ChakraUIWrapper({ children }) {
    return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
