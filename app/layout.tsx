import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Flex } from '@chakra-ui/react';

import ChakraUIWrapper from './ChakraUIWrapper';
import { NavBar } from 'components/NavBar';

// If loading a variable font, you don't need to specify the font weight.
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'GH branch dashboard',
    icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
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
