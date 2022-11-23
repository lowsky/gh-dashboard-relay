import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import InternalLink from '../components/InternalLink';

export default function Shortcuts() {
    return (
        <div>
            <Head>
                <title>React Suspend Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Heading>What is it?</Heading>

            <ul>
                <li>
                    <InternalLink href={'/restful'}>Old way</InternalLink> <strong>All or nothing:</strong> Fetching all
                    data in a top-level `useEffect()` + props-drilling
                </li>
                <li>
                    <InternalLink href={'/wait-for-all'}>With One Suspense</InternalLink>{' '}
                    <strong>Global Spinner</strong> Waiting until all data got fetched (modern Promise-based way)
                </li>
                <li>
                    <InternalLink href={'/waterfall'}>Optimised Suspense</InternalLink> <strong>Incremental:</strong>{' '}
                    Showing results incrementally (waterfall) as soon as they got loaded. (modern Promise-based way)
                </li>
                <li>
                    <InternalLink href={'/side-by-side'}>Side-by-Side</InternalLink> <strong>Comparison:</strong> Show
                    incrementally loading and wait-for-all
                </li>
            </ul>

            <Container>
                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Box>{'->'} to see how to instantly deploy this Next.js site to a public URL with Vercel.</Box>
                </a>
            </Container>
        </div>
    );
}
