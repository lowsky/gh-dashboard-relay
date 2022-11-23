import React from 'react';
import { Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Shortcuts() {
    return (
        <div>
            <Heading>Shortcuts</Heading>

            <ul>
                <li>
                    <NextLink passHref legacyBehavior href={'/restful/lowsky/dashboard'}>
                        <Link>lowsky/dashboard</Link>
                    </NextLink>
                </li>
                <li>
                    <NextLink passHref legacyBehavior href={'/restful/lowsky/spotify-graphql-server'}>
                        <Link>lowsky/spotify-graphql-server</Link>
                    </NextLink>
                </li>
                <li>
                    <NextLink passHref legacyBehavior href={'/restful/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        <Link>lowsky/spotify-graphql-server-graphql-helix-envelop</Link>
                    </NextLink>
                </li>
            </ul>
        </div>
    );
}
