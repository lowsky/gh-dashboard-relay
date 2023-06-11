// This file is required to use @next/mdx in the `app` directory.
import type { MDXComponents } from 'mdx/types';

import { Box, H1, H2, H3, Ul, A, P, Code, ResponsiveImage } from './components/ChakraMdxProvider';

// this will only be used on the server-side!
export function useMDXComponents(_unusedComponents: MDXComponents) {
    return {
        div: Box,
        h1: H1,
        h2: H2,
        h3: H3,
        ul: Ul,
        p: P,
        a: A,
        code: Code,
        img: ResponsiveImage,
    };
}
