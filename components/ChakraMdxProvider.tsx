'use client';
import { Image, ImageProps } from '@chakra-ui/next-js';
import { Box as ChakraBox, Code as ChakraCode, Heading, List, Text } from '@chakra-ui/react';
import { HeadingProps, BoxProps, TextProps, ListProps } from '@chakra-ui/layout';

import InternalLink from './InternalLink';

export function Box(props: BoxProps) {
    return <ChakraBox {...props}>{props.children}</ChakraBox>;
}

export function H1(props: HeadingProps) {
    return (
        <Heading size="xl" as="h1" variant="grey" {...props}>
            {props.children}
        </Heading>
    );
}

export function H2(props: HeadingProps) {
    return (
        <Heading size="lg" as="h2" variant="grey" {...props}>
            {props.children}
        </Heading>
    );
}

export function H3(props: HeadingProps) {
    return <Heading size="md" as="h3" {...props} />;
}

export const P = (props: TextProps) => (
    <Text pb="4" {...props}>
        {props.children}
    </Text>
);

export const A = (props) => <InternalLink {...props} />;

export const Code = (props) => <ChakraCode {...props} />;

export const ResponsiveImage = (props: ImageProps) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} />
);

export function Ul(props: ListProps) {
    return (
        <Box pl="4" pb="4">
            <List as="ul" {...props}></List>
        </Box>
    );
}
