'use client';

/**
 * based on https://relay.dev/docs/guided-tour/rendering/error-states/
 */
import React, { ReactNode } from 'react';

import { Alert } from './ui/alert';

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
                <Alert status="error" title="Error! While trying to load data:">
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
        return children;
    }
}
