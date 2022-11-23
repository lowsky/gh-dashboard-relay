import React from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Shortcuts() {
    return (
        <div>
            <Heading>What is it?</Heading>

            <ul>
                <li>
                    <NextLink passHref legacyBehavior href={'/restful'}>
                        <Link>Old approach</Link>
                    </NextLink>
                    for fetching all in a `useEffect()` way
                </li>
                <li>
                    <NextLink passHref legacyBehavior href={'/wait-for-all'}>
                        <Link>Load all with Suspend</Link>
                    </NextLink>
                    for fetching all in modern Promise-based way
                </li>
                <li>
                    <NextLink passHref legacyBehavior href={'/waterfall'}>
                        <Link>Optimised Suspend</Link>
                    </NextLink>
                    for fetching incrementally (waterfall) in modern Promise-based way
                </li>
                <li>
                    <NextLink passHref legacyBehavior href={'/side-by-side'}>
                        <Link>Side-by-Side compare </Link>
                    </NextLink>
                    wait-for-all or incrementally loading
                </li>
            </ul>
        </div>
    );
}
