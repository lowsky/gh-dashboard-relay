import { useEffect } from 'react';

import { MockedProvider } from '@apollo/client/testing/react';
import { MockLink } from '@apollo/client/testing';
import { print } from 'graphql';
import { ApolloClientAddonState, EVENTS } from 'storybook-addon-apollo-client';
import { addons } from 'storybook/internal/preview-api';
import { DecoratorFunction } from 'storybook/internal/types';
import { definePreviewAddon } from 'storybook/internal/csf';

const PARAM_KEY = 'apolloClient';

const initialGlobals = {
    [PARAM_KEY]: false,
};

const ApolloDecorator: DecoratorFunction = (StoryFn, context) => {
    const { parameters } = context;
    const { apolloClient } = parameters;
    useEffect(() => {
        const { mocks = [] } = apolloClient || {};
        const channel = addons.getChannel();

        const handleRequest = (activeIndex: number) => {
            const state = createResultFromMocks(mocks, activeIndex);
            channel.emit(EVENTS.RESULT, state);
        };

        // Emit initial state
        handleRequest(-1);

        channel.on(EVENTS.REQUEST, handleRequest);

        return () => {
            channel.off(EVENTS.REQUEST, handleRequest);
        };
    }, [apolloClient]);

    if (!apolloClient) {
        return <StoryFn />;
    }

    return (
        <MockedProvider {...apolloClient}>
            <StoryFn />
        </MockedProvider>
    );
};

const apolloAddonDecorators = [ApolloDecorator];

const apolloAddonAnnotations = {
    decorators: apolloAddonDecorators,
    initialGlobals,
};

// could be revisited...
export interface ApolloAddonParameter {
    options?: string[];
    variables?: string;
    query?: string;
    extensions?: string;
    context?: string;
    result?: string;
    error?: string;
    mocks?: MockLink.MockedResponse[];
}

interface ApolloAddonParameters {
    apolloClient?: ApolloAddonParameter;
}

interface ApolloAddonTypes {
    parameters: ApolloAddonParameters;
}

const getMockName = (mockedResponse: MockLink.MockedResponse) => {
    const operationDefinition = mockedResponse.request.query.definitions.find(
        (definition) => definition.kind === 'OperationDefinition'
    );

    if (operationDefinition?.name) {
        return operationDefinition.name.value;
    }

    return `Unnamed`;
};

function stringifyOrUndefined(value: unknown) {
    try {
        return JSON.stringify(value, null, 2);
    } catch {
        return undefined;
    }
}

export function createResultFromMocks(mocks: MockLink.MockedResponse[], activeIndex: number): ApolloClientAddonState {
    const mock = mocks[activeIndex];
    if (!mock) {
        return {
            activeIndex: -1,
            options: mocks.map(getMockName),
            query: undefined,
            variables: undefined,
            extensions: undefined,
            context: undefined,
            result: undefined,
            error: undefined,
        };
    }
    return {
        options: mocks.map(getMockName),
        activeIndex: activeIndex,
        query: print(mock.request.query),
        variables: stringifyOrUndefined(mock.request.variables),
        extensions: undefined,
        context: undefined,
        result: stringifyOrUndefined(mock.result),
        error: String(mock.error),
    };
}

export default () => definePreviewAddon<ApolloAddonTypes>(apolloAddonAnnotations);
