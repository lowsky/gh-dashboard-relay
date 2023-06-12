'use client';
import React from 'react';

import { Link, LinkProps } from '@chakra-ui/next-js';

export default function InternalLink({ prefetch = false, ...props }: LinkProps) {
    return <Link prefetch={prefetch} {...props} />;
}
