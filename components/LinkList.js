'use client';

import React from 'react';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import InternalLink from './InternalLink';

export function LinkList({ rootPath }) {
    const links = [
        'lowsky/react-suspense-meetup-demo',
        'lowsky/gh-dashboard-relay',
        'lowsky/spotify-graphql-server',
        'lowsky/spotify-graphql-server-graphql-yoga',
        'lowsky/spotify-graphql-server-graphql-helix-envelop',
        'facebook/react',
    ];

    return (
        <>
            <Heading size="1">Some example repos:</Heading>

            <UnorderedList>
                {links.map((link) => (
                    <ListItem key={link}>
                        <InternalLink href={rootPath + '/' + link}>{link}</InternalLink>
                    </ListItem>
                ))}
            </UnorderedList>
        </>
    );
}
