'use client';

import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client/react';

import { getApolloClient } from './apollo';

interface ApolloClientContextProps {
    auth: string;
    children: ReactNode;
}

export default function ApolloClientContext({ auth, children }: ApolloClientContextProps) {
    const client = getApolloClient(auth);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
