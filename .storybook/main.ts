import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: [
        // (this comment kept for formatting only)
        '../components/**/*.story.*',
        '../app/**/*.story.@(js|jsx|ts|tsx)',
        '../relay/**/*.story.@(js|jsx|ts|tsx)',
    ],
    addons: [
        // formatting
        '@storybook/addon-docs',
        '@chromatic-com/storybook',
        '@storybook/addon-a11y',
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
        name: '@storybook/nextjs',
        options: {},
    },
};

export default config;
