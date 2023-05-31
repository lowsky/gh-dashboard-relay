'use client';

import { Box, Heading, VStack } from '@chakra-ui/react';

import InternalLink from '../components/InternalLink';
import { UILibClientWrapper } from './UILibClientWrapper';

export default function Home() {
    return (
        <UILibClientWrapper>
            <Index />
        </UILibClientWrapper>
    );
}

function Index() {
    return (
        <div>
            {
                <VStack spacing="2" align="left">
                    <Heading>What is it?</Heading>
                    <VStack spacing="1" align="left">
                        <Box>
                            This web site renders the GitHub repository details, focusing on{' '}
                            <strong>feature branches</strong> with their state and linking to each deployments.
                        </Box>
                        <Box>
                            It also was a playground to play with React Suspend, especially with latest React and
                            <strong>React Server Components</strong> and
                            <strong>Next.js App Router</strong>
                        </Box>
                    </VStack>
                    <Heading size="1">Choose these different variants of data loading:</Heading>

                    <ul>
                        <li>
                            <InternalLink href={'/next'}>Next based modern</InternalLink>{' '}
                            <strong>Nextjs app router based:</strong>
                            Fetching asynchronous, on demand
                        </li>
                        <li>
                            <InternalLink href={'/restful'}>Old way</InternalLink> <strong>All or nothing:</strong>{' '}
                            Fetching all data in a top-level `useEffect()` + props-drilling
                        </li>
                        <li>
                            <InternalLink href={'/wait-for-all'}>With One Suspense</InternalLink>{' '}
                            <strong>Global Spinner</strong> Waiting until all data got fetched (modern Promise-based
                            way)
                        </li>
                        <li>
                            <InternalLink href={'/waterfall'}>Optimised Suspense</InternalLink>{' '}
                            <strong>Incremental:</strong> Showing results incrementally (waterfall) as soon as they got
                            loaded. (modern Promise-based way)
                        </li>
                        <li>
                            <InternalLink href={'/side-by-side'}>Side-by-Side</InternalLink>
                            <strong>Comparison:</strong> Show incrementally loading and wait-for-all
                        </li>
                    </ul>
                </VStack>
            }
        </div>
    );
}
