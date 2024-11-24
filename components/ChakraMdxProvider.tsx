'use client';
//import { Image, ImageProps } from '@chakra-ui/next-js';
import {
    Box as ChakraBox,
    Code as ChakraCode,
    Heading,
    Text,
    HeadingProps,
    Image,
    ImageProps,
    BoxProps,
    TextProps,
    List,
} from '@chakra-ui/react';

import InternalLink from './InternalLink';
import React from 'react';

export function Box(props: BoxProps) {
    return <ChakraBox {...props}>{props.children}</ChakraBox>;
}

export function H1(props: HeadingProps) {
    return (
        <Heading size="xl" as="h1" colorPalette="grey" {...props}>
            {props.children}
        </Heading>
    );
}

export function H2(props: HeadingProps) {
    return (
        <Heading size="lg" as="h2" colorPalette="grey" {...props}>
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
    // This rule does not exist: eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} />
);

export function Ol(props: List.RootProps) {
    return (
        <Box pl="4" pb="4">
            <List.Root as="ol" {...props}></List.Root>
        </Box>
    );
}

export function Ul(props: List.RootProps) {
    return (
        <Box pl="4" pb="4">
            <List.Root {...props}></List.Root>
        </Box>
    );
}
