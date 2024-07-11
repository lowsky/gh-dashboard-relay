import React from 'react';

import InternalLink from 'components/InternalLink';
import { UserRepoFromUrlProvider } from 'components/useUserRepoFromRoute';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <UserRepoFromUrlProvider>
            <InternalLink href="/next">Back to shortcut list</InternalLink>
            {children}
        </UserRepoFromUrlProvider>
    );
}
