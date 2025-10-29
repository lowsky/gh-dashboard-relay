import { Preview } from '@storybook/nextjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Provider } from 'components/ui/provider';

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
    ],
    // commented-out, to avoid generating docs:: tags: ['autodocs'],
    parameters: {
        docs: {
            codePanel: true,
        },
        actions: { argTypesRegex: '^on.*' },
        nextjs: {
            appDirectory: true,
        },
    },
};

export default preview;
