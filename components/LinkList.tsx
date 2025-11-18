'use client';

import { Heading, List } from '@chakra-ui/react';

import InternalLink from './InternalLink';

export function LinkList({ rootPath }: { rootPath: string }) {
    const links = [
        'lowsky/react-suspense-meetup-demo',
        'lowsky/gh-dashboard-relay',
        'lowsky/spotify-graphql-server',
        'lowsky/spotify-graphql-server-graphql-yoga',
        'lowsky/spotify-graphql-server-graphql-helix-envelop',
        'facebook/relay',
        'add your own, see url schema',
    ];

    return (
        <>
            <Heading>Some example repos:</Heading>

            <List.Root>
                {links.map((link) => (
                    <List.Item key={link}>
                        <InternalLink href={rootPath + '/' + link}>{link}</InternalLink>
                    </List.Item>
                ))}
            </List.Root>
        </>
    );
}
