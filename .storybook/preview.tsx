//import { customTheme } from 'components/theme';
//import { withThemeByClassName } from '@storybook/addon-themes';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Decorator } from '@storybook/react';

export const decorators: Decorator[] = [
    /*
    LATER:

    withThemeByClassName<ReactRenderer>({
        defaultTheme: 'light',
        themes: {
            light: '',
            dark: 'dark',
        },
    }),

     */
    (Story) => (
        <ChakraProvider value={defaultSystem}>
            <Story />
        </ChakraProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
        // LATER: move up into decoreator:+
        // theme: customTheme,
    },
    nextjs: {
        appDirectory: true,
    },
};
