import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import EmotionRootStyleRegistry from './EmotionRootStyleRegistry';
import ColorModeScriptClient from './ColorModeScriptClient';

import { NavBar } from 'components/NavBar';
import WarningGitHubRateLimiting from 'components/WarningGitHubRateLimiting';

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
                <EmotionRootStyleRegistry>
                    <>
                        <NavBar />
                        <WarningGitHubRateLimiting/>
                        <div>{children}</div>
                    </>
                </EmotionRootStyleRegistry>
            </body>
        </html>
    );
}
