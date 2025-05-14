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
        '@storybook/addon-essentials',
        '@storybook/addon-themes',
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
        options: {
            lazyCompilation: true,
        },
    },
    webpackFinal: (baseConfig, _options) => {
        baseConfig.resolve = {
            ...(baseConfig.resolve ?? {}),
            alias: {
                ...(baseConfig.resolve?.alias ?? {}),
                '@opentelemetry/api': 'next/dist/compiled/@opentelemetry/api',
            },
        };
        return baseConfig;
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
