'use client';
// this can only run on client-side.
// Error:
// > Server Functions cannot be called during initial render.
// > This would create a fetch waterfall.
// > Try to use a Server Component to pass data to Client Components instead.

import React, { ReactNode } from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { useEnvironment } from 'lib/relay';

export default function RelayClientContext({ children }: { children: ReactNode }) {
    const environment = useEnvironment({});

    return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
