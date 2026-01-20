import { useEffect } from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { themes } from 'storybook/theming';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Provider } from 'components/ui/provider';

import { print } from 'graphql';
import type { MockLink } from '@apollo/client/testing';
import { MockedProvider } from '@apollo/client/testing/react';
import { addons } from 'storybook/internal/preview-api';
import { EVENTS } from 'storybook-addon-apollo-client';
import type { ApolloClientAddonState } from 'storybook-addon-apollo-client';

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

function createResultFromMocks(mocks: MockLink.MockedResponse[], activeIndex: number): ApolloClientAddonState {
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

const ApolloDecorator = (Story, context) => {
    useEffect(() => {
        const { mocks = [] } = context.parameters.apolloClient || {};
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
    }, [context.parameters.apolloClient]);

    if (!context.parameters.apolloClient) {
        return <Story />;
    }

    return (
        <MockedProvider {...context.parameters.apolloClient}>
            <Story />
        </MockedProvider>
    );
};

const preview: Preview = {
    decorators: [
        withThemeByClassName({
            defaultTheme: 'dark',
            themes: {
                light: '',
                dark: 'dark',
            },
        }),
        (Story) => (
            <Provider>
                <Story />
            </Provider>
        ),
        ApolloDecorator,
    ],

    tags: ['autodocs'],

    // commented-out, to avoid generating docs:: tags: ['autodocs'],
    parameters: {
        docs: {
            codePanel: true,
            theme: themes.dark,
        },

        actions: { argTypesRegex: '^on.*' },

        nextjs: {
            appDirectory: true,
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
};

export default preview;
