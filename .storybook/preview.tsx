import { Preview } from '@storybook/nextjs-vite';
import { themes } from 'storybook/theming';
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
