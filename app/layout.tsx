import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import EmotionRootStyleRegistry from './EmotionRootStyleRegistry';
import ColorModeScriptClient from './ColorModeScriptClient';

import { NavBar } from 'components/NavBar';

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
                <ColorModeScriptClient />
                <EmotionRootStyleRegistry>
                    <>
                        <NavBar />
                        <div>{children}</div>
                    </>
                </EmotionRootStyleRegistry>
            </body>
        </html>
    );
}
