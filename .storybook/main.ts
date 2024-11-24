import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: [
        '../components/*.story.@(js|jsx|ts|tsx|mdx)',
        '../components/**/*.story.@(js|jsx|ts|tsx|mdx)',
        '../container/*.story.@(js|jsx|ts|tsx|mdx)',
        '../container/**/*.story.@(js|jsx|ts|tsx|mdx)',
        '../app/*.story.@(js|jsx|ts|tsx|mdx)',
        '../app/**/*.story.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
    docs: {
        autodocs: false,
    },
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: '@storybook/nextjs',
        options: {
            fastRefresh: true,
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
};

export default config;
