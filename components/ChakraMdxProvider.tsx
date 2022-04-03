import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import { Box, Code, Heading, Text, Link } from '@chakra-ui/react';

const ResponsiveImage = (props) => <Image alt={props.alt} layout="responsive" {...props} />;

const ul = (props) => (
    // need to add this padding, so the bullet points show up:
    <Box pl="4">
        <ul {...props}></ul>
    </Box>
);

const components = {
    img: ResponsiveImage,
    h1: (props) => <Heading size="xl" as="h1" variant="grey" {...props} />,
    h2: (props) => <Heading size="lg" as="h2" variant="grey" {...props} />,
    h3: (props) => <Heading as="h3" {...props} />,
    p: Text,
    a: Link,
    ul,
    code: Code,
};

export default function ChakraMdxProvider(props) {
    return (
        <MDXProvider components={components} disableParentContext>
            {props.children}
        </MDXProvider>
    );
}
