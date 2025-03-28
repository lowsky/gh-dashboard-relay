import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import { Provider } from 'components/ui/provider';
import ColorModeScriptClient from './ColorModeScriptClient';
import WarningGitHubRateLimiting from 'components/WarningGitHubRateLimiting';
import { NavBar } from 'components/NavBar';
import { Box } from 'components/ChakraMdxProvider';
import WhenSignedIn from 'components/WhenSignedIn';
import WhenNotAuthenticated from 'components/WhenNotAuthenticated';
import { Logout } from 'components/Login';

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
                <ColorModeScriptClient />
                <Provider>
                    <NavBar />
                    <WhenSignedIn>
                        <Logout />
                    </WhenSignedIn>
                    <WhenNotAuthenticated>
                        <WarningGitHubRateLimiting />
                    </WhenNotAuthenticated>
                    <Box p={4}>{children}</Box>
                </Provider>
            </body>
        </html>
    );
}
