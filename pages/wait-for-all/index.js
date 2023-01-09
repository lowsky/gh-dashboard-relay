import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>With One Suspense. Global Spinner </Heading>
            <Box mb={6}>Waiting until all data got fetched (modern Promise-based way)</Box>

            <LinkList rootPath="/wait-for-all" />
        </div>
    );
}
