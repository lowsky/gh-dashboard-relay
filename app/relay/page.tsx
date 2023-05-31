'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';
import { LinkList } from '../../components/LinkList';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>Relay driven</Heading>
            <Box mb={6}>Fetching and rendering driven with Relay and GraphQL endpoint.</Box>

            <LinkList rootPath="/relay" />
        </div>
    );
}
