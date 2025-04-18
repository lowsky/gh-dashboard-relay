import type { Preview, Decorator, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from 'components/theme';

export const decorators: Decorator[] = [
    withThemeByClassName<ReactRenderer>({
        defaultTheme: 'light',
        themes: {
            light: '',
            dark: 'dark',
        },
    }),
    (Story) => (
        <ChakraProvider value={system}>
            <Story />
        </ChakraProvider>
    ),
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        nextjs: {
            appDirectory: true,
        },
    },
};

export default preview;
