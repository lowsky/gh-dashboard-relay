import React from 'react';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>With One Suspense. Global Spinner </Heading>
            <Box mb={6}>Waiting until all data got fetched (modern Promise-based way)</Box>

            <UnorderedList>
                <ListItem>
                    <InternalLink href={'/wait-for-all/lowsky/dashboard'}>lowsky/dashboard</InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/wait-for-all/lowsky/spotify-graphql-server'}>
                        lowsky/spotify-graphql-server
                    </InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/wait-for-all/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        lowsky/spotify-graphql-server-graphql-helix-envelop
                    </InternalLink>
                </ListItem>
            </UnorderedList>
        </div>
    );
}
