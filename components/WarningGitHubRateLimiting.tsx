'use client'; // using useState

import React, { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';

import { Login, Logout } from './Login';

type FetchingUserInfo = {
    name?: string;
    loading?: true;
    error?: string | unknown;
} | null;

export default function WarningGitHubRateLimiting() {
    const [user, setUser] = useState<FetchingUserInfo>(null);

    return (
        <Alert status={user?.loading ? 'loading' : user?.error ? 'error' : user?.name ? 'success' : 'info'}>
            <AlertIcon />
            <AlertDescription>
                {
                    <>
                        <Login /> to avoid GitHub rate-limiting and having access to your repositories!
                    </>
                }
            </AlertDescription>
        </Alert>
    );
}
