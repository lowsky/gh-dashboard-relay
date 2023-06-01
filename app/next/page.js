'use client';
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href="/">back to main page</InternalLink>
            <Heading>
                Modern <strong>Nextjs app router based:</strong>
            </Heading>

            <Box mb={6}>
                Fetching asynchronous, on demand, and waiting automatically for the resolving of the data fetching.
                <br />
                Shows incrementally-loading (wait-for-all) of same repository.
            </Box>
            <LinkList rootPath="/next" />
        </div>
    );
}
