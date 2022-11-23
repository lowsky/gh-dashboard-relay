import React from 'react';
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

import InternalLink from '../../components/InternalLink';

export default function Shortcuts() {
    return (
        <div>
            <InternalLink href={'/'}>back to main page</InternalLink>

            <Heading>Side-by-Side. Comparison: </Heading>
            <Box mb={6}>Shows incrementally-loading | wait-for-all of same repository.</Box>

            <UnorderedList>
                <ListItem>
                    <InternalLink href={'/side-by-side/lowsky/dashboard'}>lowsky/dashboard</InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/side-by-side/lowsky/spotify-graphql-server'}>
                        lowsky/spotify-graphql-server
                    </InternalLink>
                </ListItem>
                <ListItem>
                    <InternalLink href={'/side-by-side/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        lowsky/spotify-graphql-server-graphql-helix-envelop
                    </InternalLink>
                </ListItem>
            </UnorderedList>
        </div>
    );
}
