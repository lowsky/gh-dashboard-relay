'use client';
import Image from 'next/image';
import { Box as ChakraBox, Code as ChakraCode, Heading, Text } from '@chakra-ui/react';

import InternalLink from './InternalLink';

export function Box({ children, ...props }) {
    return <ChakraBox {...props}>{children}</ChakraBox>;
}

export function H1({ children, ...props }) {
    return (
        <Heading size="xl" as="h1" variant="grey" {...props}>
            {children}
        </Heading>
    );
}

export function H2({ children, ...props }) {
    return (
        <Heading size="lg" as="h2" variant="grey" {...props}>
            {children}
        </Heading>
    );
}

export function H3(props) {
    return <Heading size="md" as="h3" {...props} />;
}

export const P = ({ children, ...props }) => (
    <Text pb="4" {...props}>
        {children}
    </Text>
);

export const A = (props) => <InternalLink {...props} />;

export const Code = (props) => <ChakraCode {...props} />;

export const ResponsiveImage = (props) => <Image alt={props.alt} layout="responsive" {...props} />;

export function Ul(props) {
    return (
        <Box pl="4" pb="4">
            <ul {...props}></ul>
        </Box>
    );
}
