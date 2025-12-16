import { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
    stories: [
        /**
         * This story breaks build, in visual testing
         * it seems the triggered build won't be able to handle the page.mdx file correctly
         */
        /*
        {
            directory: '../app',
            titlePrefix: 'App',
            files: '**'+'/*.story.@(js|jsx|ts|tsx)',
        },
        */
        {
            directory: '../relay',
            titlePrefix: 'Relay',
            files: '**/*.story.@(js|jsx|ts|tsx)',
        },
        {
            directory: '../components',
            titlePrefix: 'Components',
            files: '**/*.story.@(js|jsx|ts|tsx)',
        },
    ],
    addons: [
        '@storybook/addon-docs',
        '@chromatic-com/storybook',
        '@storybook/addon-themes',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],
    core: {
        disableTelemetry: true,
    },
    refs: {
        '@chakra-ui/react': {
            disable: true,
        },
    },
    framework: {
        name: '@storybook/nextjs-vite',
        options: {},
    },
};

export default config;
