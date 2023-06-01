import React from 'react';

import { Metadata } from 'next';

import EmotionRootStyleRegistry from './EmotionRootStyleRegistry';
import { NavBar } from '../components/NavBar';

export const metadata: Metadata = {
    title: 'GH branch dashboard',
    icons: '/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
