/**
 * based on https://relay.dev/docs/guided-tour/rendering/error-states/
 */
import React, { ReactNode } from 'react';

import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';

type State = { error: Error | null };

type Props = {
    fallback?: ({ error }: State) => ReactNode;
    message?: string | null;
    children: React.ReactNode;
};
export default class RichErrorBoundary extends React.Component<Props, State> {
    state = { error: null };

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { children, message, fallback } = this.props;
        const { error } = this.state;

        if (error) {
            if (message === null) return null;

            if (typeof fallback === 'function') {
                return fallback({ error });
            }
            return (
                <Alert status="error">
                    <AlertIcon />
                    <Box>
                        <AlertTitle>Error! While trying to load data:</AlertTitle>
                        {message && <AlertDescription>{message}</AlertDescription>}
                        {!message && (
                            <AlertDescription>
                                Details:
                                <pre>{JSON.stringify(error, null, 2)}</pre>
                            </AlertDescription>
                        )}
                    </Box>
                </Alert>
            );
        }
        return children;
    }
}
