import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { chakra } from '@chakra-ui/react';

// wrap the NextLink with Chakra UI's factory function
const InternalLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
    // ensure that you're forwarding all the required props for your case
    shouldForwardProp: (prop) => ['href', 'target', 'children'].includes(prop),
});

export default InternalLink;
