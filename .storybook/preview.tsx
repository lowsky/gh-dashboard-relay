import { system } from 'components/theme';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ChakraProvider } from '@chakra-ui/react';
//import { defaultSystem } from '@chakra-ui/react';
import type { Decorator, ReactRenderer } from '@storybook/react';

export const decorators: Decorator[] = [
    withThemeByClassName<ReactRenderer>({
        defaultTheme: 'light',
        themes: {
            light: '',
            dark: 'dark',
        },
    }),
    (Story) => (
        //<ChakraProvider value={system}>
        <ChakraProvider value={system}>
            <Story />
        </ChakraProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextjs: {
        appDirectory: true,
    },
};
