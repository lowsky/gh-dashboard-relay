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
    addons: ['@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
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
};

export default config;
