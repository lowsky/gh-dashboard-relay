import { definePreview } from '@storybook/nextjs-vite';
import { themes } from 'storybook/theming';
import { withThemeByClassName } from '@storybook/addon-themes';
import a11yAddon from '@storybook/addon-a11y';
import docsAddon from '@storybook/addon-docs';
import relayAddon from 'relay/storybook/addon';
import apolloClientAddon from './apolloClientAddon';

import { chakraDecorator } from './chakraDecorator';

const preview = definePreview({
    decorators: [
        withThemeByClassName({
            defaultTheme: 'dark',
            themes: {
                light: '',
                dark: 'dark',
            },
        }),
        chakraDecorator,
    ],

    tags: ['autodocs'],

    addons: [a11yAddon(), docsAddon(), relayAddon(), apolloClientAddon()],
    parameters: {
        apolloClient: {
            // TODO revisit
            //options: [],
            mocks: [], // if missing, it breaks SB rendering manager:
            // ... it seems it was not checked in apollo addon properly
        },
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
});

export default preview;
