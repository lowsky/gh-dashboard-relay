import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: [
        // formatting
        '../components/**/*.story.*',
        '../container/**/*.story.*',
        '../app/**/*.story.@(js|jsx|ts|tsx)',
        '../relay/**/*.story.@(js|jsx|ts|tsx)',
    ],
    addons: [
        // formatting
        '@storybook/addon-docs',
        '@chromatic-com/storybook',
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
