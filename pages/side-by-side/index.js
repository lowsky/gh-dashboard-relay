import React from 'react';
import { Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export default function Shortcuts() {
    return (
        <div>
            <Link passHref legacyBehavior href={'/'}>
                <ChakraLink>back to main page</ChakraLink>
            </Link>

            <Heading>Load and wait for all via Suspend: Fetching all, Promise-based</Heading>

            <ul>
                <li>
                    <Link passHref legacyBehavior href={'/side-by-side/lowsky/dashboard'}>
                        <ChakraLink>lowsky/dashboard</ChakraLink>
                    </Link>
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/side-by-side/lowsky/spotify-graphql-server'}>
                        <ChakraLink>lowsky/spotify-graphql-server</ChakraLink>
                    </Link>
                </li>
                <li>
                    <Link
                        passHref
                        legacyBehavior
                        href={'/side-by-side/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        <ChakraLink>lowsky/spotify-graphql-server-graphql-helix-envelop</ChakraLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
