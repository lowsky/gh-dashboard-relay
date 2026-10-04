import type { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import WarningGitHubRateLimiting from 'components/WarningGitHubRateLimiting';
import WhenNotAuthenticated from 'components/WhenNotAuthenticated';

export default function UserLayout({ children }: { children: ReactNode }) {
    return (
        <Flex direction="column">
            <WhenNotAuthenticated>
                <WarningGitHubRateLimiting />
            </WhenNotAuthenticated>
            {children}
        </Flex>
    );
}
