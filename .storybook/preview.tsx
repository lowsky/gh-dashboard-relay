import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Provider } from 'components/ui/provider';

const preview: Preview = {
    decorators: [
        withThemeByClassName<ReactRenderer>({
            defaultTheme: 'light',
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
    ],
    // commented-out, to avoid generating docs:: tags: ['autodocs'],
    parameters: {
        actions: { argTypesRegex: '^on.*' },
        nextjs: {
            appDirectory: true,
        },
    },
};

export default preview;
