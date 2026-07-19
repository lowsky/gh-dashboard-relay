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
    // @ts-expect-error type is not correct: needs generic arg, to fix this error in e.g. components/RepoItem.tsx:28:44
    //.next/dev/types/link.d.ts:87:5 - The expected type comes from property 'href' which is declared here on type 'IntrinsicAttributes & Omit<LinkProps, "href"> & LinkRestProps & { href: UrlObject | RouteImpl<string>; }'
    //     87     href: __next_route_internal_types__.RouteImpl<RouteInferType> | UrlObject
}: Omit<LinkProps, 'href'> & NextLinkProps): ReactElement<HTMLAnchorElement> {
    return (
        <Link variant={variant} asChild>
            {<NextLink href={href} prefetch={prefetch} {...props} />}
        </Link>
    );
}
