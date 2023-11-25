'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import ChakraUIWrapper from './ChakraUIWrapper';

import React from 'react';

export default function EmotionRootStyleRegistry({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraUIWrapper>{children}</ChakraUIWrapper>
        </CacheProvider>
    );
}
