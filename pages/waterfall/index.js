import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>Optimised Suspense. Waterfall 🌊</Heading>
            <Box mb={6}>
                Showing results incrementally (waterfall) as soon as they got loaded. (modern Promise-based way)
            </Box>

            <LinkList rootPath="/waterfall" />
        </div>
    );
}
