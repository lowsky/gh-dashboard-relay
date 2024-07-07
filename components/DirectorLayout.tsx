'use client'; // this directive should be at top of the file, before any imports.

import React from 'react';
import { Box } from '@chakra-ui/react';

import CacheInspector from 'cache/CacheInspector';
import { isServerSideRendering } from 'lib/isServerSideRendering';

export default function DirectorLayout({ children }) {
    return (
        <Box p="5">
            {!isServerSideRendering() && (
                // inject the hitchcock debug-tool for the async fetching
                <CacheInspector>{children}</CacheInspector>
            )}
            {isServerSideRendering() && (
                // inject the hitchcock debug-tool for the async fetching
                <>{children}</>
            )}
        </Box>
    );
}
