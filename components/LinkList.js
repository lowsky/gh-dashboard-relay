import React from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import InternalLink from './InternalLink';

export function LinkList({ rootPath }) {
    const links = [
        'lowsky/react-suspense-meetup-demo',
        'facebook/react',
        'lowsky/spotify-graphql-server',
        'lowsky/spotify-graphql-server-graphql-helix-envelop',
        'lowsky/dashboard',
    ];

    return (
        <UnorderedList>
            {links.map((link) => (
                <ListItem key={link}>
                    <InternalLink href={rootPath + '/' + link}>{link}</InternalLink>
                </ListItem>
            ))}
        </UnorderedList>
    );
}
