//'use client';

// this can only run on client-side.
// Error:
// > Server Functions cannot be called during initial render.
// > This would create a fetch waterfall.
// > Try to use a Server Component to pass data to Client Components instead.

import React, { ReactNode } from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getCurrentEnvironment } from './relay';

export default function RelayClientContext({ auth, children }: { auth: string; children: ReactNode }) {
    //const environment = useEnvironment({});

    console.log('RelayClientContext - fetching environment');
    const environment = getCurrentEnvironment(auth);

    return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
