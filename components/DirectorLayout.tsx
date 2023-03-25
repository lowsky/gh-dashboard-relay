'use client'; // this directive should be at top of the file, before any imports.

import React from 'react';
import { Box } from '@chakra-ui/react';

import CacheInspector from '../cache/CacheInspector';

export default function DirectorLayout({ children }) {
    return (
        <Box p="5">
            {!(typeof window === 'undefined') && (
                // inject the hitchcock debug-tool for the async fetching
                <CacheInspector>{children}</CacheInspector>
            )}
            {typeof window === 'undefined' && (
                // inject the hitchcock debug-tool for the async fetching
                <>{children}</>
            )}
        </Box>
    );
}
