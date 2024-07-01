'use client'; // using useState

import React from 'react';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';

import { Login } from './Login';

export default function WarningGitHubRateLimiting() {
    return (
        <Alert status="info">
            <AlertIcon />
            <AlertDescription>
                <Login /> to avoid GitHub rate-limiting and having access to your repositories!
            </AlertDescription>
        </Alert>
    );
}
