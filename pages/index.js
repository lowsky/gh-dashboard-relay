import React from 'react';
import { Box, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export default function Shortcuts() {
    return (
        <div>
            <Heading>What is it?</Heading>

            <ul>
                <li>
                    <Link passHref legacyBehavior href={'/restful'}>
                        <ChakraLink>Old approach</ChakraLink>
                    </Link>
                    for fetching all in a `useEffect()` way
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/wait-for-all'}>
                        <ChakraLink>Load all with Suspend</ChakraLink>
                    </Link>
                    for fetching all in modern Promise-based way
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/waterfall'}>
                        <ChakraLink>Optimised Suspend</ChakraLink>
                    </Link>
                    for fetching incrementally (waterfall) in modern Promise-based way
                </li>
                <li>
                    <Link passHref legacyBehavior href={'/side-by-side'}>
                        <ChakraLink>Side-by-Side compare </ChakraLink>
                    </Link>
                    wait-for-all or incrementally loading
                </li>
            </ul>
        </div>
    );
}
