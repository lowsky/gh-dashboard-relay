import React, { ReactNode } from 'react';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getCurrentEnvironment } from './relay';

export default function RelayClientContext({ auth, children }: { auth: string; children: ReactNode }) {
    const environment = getCurrentEnvironment(auth);

    return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
