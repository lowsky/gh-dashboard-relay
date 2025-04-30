'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Alert } from '../components/ui/alert';
import { Button } from 'components/ui/button';
import { Login } from '../components/Login';
import { ButtonGroup } from '@chakra-ui/react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const loginAndRetryButtons = (
        <ButtonGroup>
            <Login title="Re-login" />
            <Button onClick={() => reset() /* Attempt to recover by trying to re-render the segment */}>
                Try reloading
            </Button>
        </ButtonGroup>
    );

    const message = error?.message;
    if (message?.startsWith('Authentification')) {
        return (
            <Alert status="error" title="Error! While trying to load data:" endElement={loginAndRetryButtons}>
                {message && <span>{message}</span>}
                {!message && (
                    <span>
                        Details:
                        <pre>{JSON.stringify(error, null, 2)}</pre>
                    </span>
                )}
            </Alert>
        );
    }
    return (
        <Alert status="error" title="Error! While trying to load data:" endElement={loginAndRetryButtons}>
            {message && <span>{message}</span>}
            {!message && (
                <span>
                    Details:
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </span>
            )}
        </Alert>
    );
}
