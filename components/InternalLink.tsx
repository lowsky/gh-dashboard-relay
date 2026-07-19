'use client';
import type { ReactElement } from 'react';

import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';
import type { LinkProps } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function InternalLink({
    prefetch = false,
    href,
    variant,
    color,
    content,
    translate,
    ...props
}: Omit<LinkProps, 'href'> & NextLinkProps): ReactElement<HTMLAnchorElement> {
    return (
        <Link variant={variant} asChild color={color} translate={translate} content={content}>
            {<NextLink href={href} prefetch={prefetch} {...props} />}
        </Link>
    );
}
