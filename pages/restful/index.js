import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>Old way. All or nothing</Heading>
            <Box mb={6}>Fetching all data in a top-level `useEffect()` + props-drilling</Box>

            <LinkList rootPath="/restful" />
        </div>
    );
}
