import React, { useMemo } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { DecoratorFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import { themeConfig } from 'components/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    chakra: {
        theme: extendTheme({ ...themeConfig }),
    },
};

const DEFAULT_THEME = {};

export const ChakraProviderDecorator: DecoratorFn = (Story, context) => {
    const {
        parameters: { chakra: chakraParams },
    } = context;
    const chakraTheme = chakraParams?.theme
        ? typeof chakraParams.theme === 'function'
            ? chakraParams.theme(context)
            : chakraParams.theme
        : DEFAULT_THEME; // TODO What is the default theme?
    // LATER: const direction = useDirection(globalDirection || chakraTheme?.direction);
    const themeWithDirectionOverride = useMemo(() => extendTheme(chakraTheme), [chakraTheme]);
    return (
        <ChakraProvider {...chakraParams} theme={themeWithDirectionOverride}>
            <Story {...context} />
        </ChakraProvider>
    );
};

export const decorators = [ChakraProviderDecorator];
