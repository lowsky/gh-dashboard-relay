/**
 * from https://relay.dev/docs/guided-tour/rendering/error-states/
 */
import React from 'react';

type State = { error?: Error | null };

export default class ErrorBoundaryWithRetry extends React.Component<{ fallback?:any }, State> {
    state = { error: null };

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { children, fallback } = this.props;
        const { error } = this.state;

        if (error) {
            if (typeof fallback === 'function') {
                return fallback({ error });
            }

            return (
                <div className='notification has-text-danger'>
                    Error! While trying to load data from the server:
                    <br/>
                    {JSON.stringify(error)}
                </div>
            );
        }
        return children;
    }
};
