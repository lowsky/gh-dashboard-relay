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
    ...props
}: Omit<LinkProps, 'href'> & NextLinkProps): ReactElement<HTMLAnchorElement> {
    return (
        <Link variant={variant} asChild>
            {
                // @ts-expect-error parameter injected from parentLink component
                <NextLink href={href} prefetch={prefetch} {...props} />
            }
        </Link>
    );
}
