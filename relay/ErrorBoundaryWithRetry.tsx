/**
 * from https://relay.dev/docs/guided-tour/rendering/error-states/
 */
import React from 'react';

export default class ErrorBoundaryWithRetry extends React.Component<{ fallback: any }> {
    state = { error: null };

    static getDerivedStateFromError(error:Error) {
        return { error };
    }

    render() {
        const { children, fallback } = this.props;
        const { error } = this.state;
        if (error) {
            if (typeof fallback === 'function') {
                return fallback({ error });
            }
            return fallback;
        }
        return children;
    }
}
