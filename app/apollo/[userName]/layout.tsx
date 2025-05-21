import React from 'react';
import { Flex } from '@chakra-ui/react';

import WarningGitHubRateLimiting from 'components/WarningGitHubRateLimiting';
import WhenSignedIn from 'components/WhenSignedIn';
import WhenNotAuthenticated from 'components/WhenNotAuthenticated';
import { Logout } from 'components/Login';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex direction="column">
            <WhenSignedIn>
                <Logout />
            </WhenSignedIn>
            <WhenNotAuthenticated>
                <WarningGitHubRateLimiting />
            </WhenNotAuthenticated>
            {children}
        </Flex>
    );
}
