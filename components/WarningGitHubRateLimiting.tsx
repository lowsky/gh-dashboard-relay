'use client'; // using useState

import React from 'react';

import { Login } from './Login';
import { Alert } from './ui/alert';

export default function WarningGitHubRateLimiting() {
    return (
        <Alert status="info">
            <Login /> to avoid GitHub rate-limiting and having access to your repositories!
        </Alert>
    );
}
