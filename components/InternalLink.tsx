'use client';
import React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

export default function InternalLink({
    prefetch = false,
    href,
    variant,
    ...props
}: Omit<LinkProps, 'href'> & NextLinkProps): JSX.Element {
    return (
        <Link variant={variant} asChild>
            {
                // @ts-expect-error parameter injected from parentLink component
                <NextLink href={href} prefetch={prefetch} {...props} />
            }
        </Link>
    );
}
