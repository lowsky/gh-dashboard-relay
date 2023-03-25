import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href="/">back to main page</InternalLink>

            <Heading>Side-by-Side. Comparison: </Heading>
            <Box mb={6}>Shows incrementally-loading | wait-for-all of same repository.</Box>

            <LinkList rootPath="/side-by-side" />
        </div>
    );
}
