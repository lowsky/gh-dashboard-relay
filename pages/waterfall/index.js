import React from 'react';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>Optimised Suspense. Incremental</Heading>
            <Box mb={6}>
                Showing results incrementally (waterfall) as soon as they got loaded. (modern Promise-based way)
            </Box>

            <UnorderedList>
                <ListItem>
                    <InternalLink href={'/waterfall/lowsky/dashboard'}>lowsky/dashboard</InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/waterfall/lowsky/spotify-graphql-server'}>
                        lowsky/spotify-graphql-server
                    </InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/waterfall/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        lowsky/spotify-graphql-server-graphql-helix-envelop
                    </InternalLink>
                </ListItem>
            </UnorderedList>
        </div>
    );
}
