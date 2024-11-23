'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Alert } from 'components/ui/alert';
import { Button } from 'components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <Alert status="error">
                <strong>Something went wrong:</strong>
                <br />
                {error?.message}
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
