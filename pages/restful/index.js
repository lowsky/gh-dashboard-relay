import React from 'react';
import { Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export default function Shortcuts() {
    return (
        <div>
            <Link passHref legacyBehavior href={'/'}>
                <ChakraLink>back to main page</ChakraLink>
            </Link>

            <Heading>Old approach for fetching all in one top-level in a useEffect()</Heading>

            <ul>
                <li>
                    <Link passHref legacyBehavior href={'/restful/lowsky/dashboard'}>
                        <ChakraLink>lowsky/dashboard</ChakraLink>
                    </Link>
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/restful/lowsky/spotify-graphql-server'}>
                        <ChakraLink>lowsky/spotify-graphql-server</ChakraLink>
                    </Link>
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/restful/lowsky/spotify-graphql-server-graphql-helix-envelop'}>
                        <ChakraLink>lowsky/spotify-graphql-server-graphql-helix-envelop</ChakraLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
