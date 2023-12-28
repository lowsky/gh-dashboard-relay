import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import ChakraUIWrapper from './ChakraUIWrapper';
import ColorModeScriptClient from './ColorModeScriptClient';
import WarningGitHubRateLimiting from 'components/WarningGitHubRateLimiting';
import { NavBar } from 'components/NavBar';
import { Box } from 'components/ChakraMdxProvider';

// If loading a variable font, you don't need to specify the font weight
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
        <html lang="en" className={inter.className}>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <NextTopLoader />
                <ColorModeScriptClient />
                <ChakraUIWrapper>
                    <NavBar />
                    <WarningGitHubRateLimiting />
                    <Box p={4}>{children}</Box>
                </ChakraUIWrapper>
            </body>
        </html>
    );
}
