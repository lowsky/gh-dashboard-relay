import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google'

import EmotionRootStyleRegistry from './EmotionRootStyleRegistry';
import { NavBar } from 'components/NavBar';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'GH branch dashboard',
    icons: '/favicon.ico',
};

//Later: (as it does not work here with /app)
//import { ColorModeScript } from '@chakra-ui/react';
//<ColorModeScript/*initialColorMode={'light' /* | "dark" | "system" * /}*/ />

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
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
