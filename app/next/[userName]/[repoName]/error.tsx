'use client'; // Error components must be Client Components

import { Alert, AlertDescription, AlertIcon, Button } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <Alert status="error">
                <AlertIcon />
                <AlertDescription>
                    <strong>Something went wrong:</strong>
                    <br />
                    {error?.message}
                </AlertDescription>
            </Alert>
            <br />
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }>
                Try again
            </Button>
        </div>
    );
}
