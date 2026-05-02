import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Flex } from '@chakra-ui/react';

import ChakraUIWrapper from './ChakraUIWrapper';
import { NavBar } from 'components/NavBar';

// Import global styles
import './index.css';

export const metadata: Metadata = {
    title: 'GH branch dashboard',
    icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <NextTopLoader />
                <ChakraUIWrapper>
                    <NavBar />
                    <Flex p={4} direction="column">
                        {children}
                    </Flex>
                </ChakraUIWrapper>
            </body>
        </html>
    );
}
