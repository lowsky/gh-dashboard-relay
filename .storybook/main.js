const path = require('path');
module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../components/*.story.@(js|jsx|ts|tsx|mdx)',
        '../container/*.story.@(js|jsx|ts|tsx|mdx)',
        '../pages/*.story.@(js|jsx|ts|tsx|mdx)',
        '../relay/*.story.@(js|jsx|ts|tsx|mdx)',
        '../stories/*.story.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        //
        '@storybook/addon-essentials',
        '@chakra-ui/storybook-addon',
        'storybook-addon-next-router',
    ],
    core: { builder: 'webpack5' },
    // sb build bails missing some deps if missing
    typescript: { reactDocgen: false },
    features: {
        postcss: false,
    },
    webpackFinal: async (config) => ({
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules,
                {
                    type: 'javascript/auto',
                    test: /\.mjs$/,
                    include: /node_modules/,
                },
            ],
        },
        // Enable Docs pages
        // https://github.com/storybookjs/storybook/issues/15253#issuecomment-951046559
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                // Resolve path issue for emotion v11
                '@emotion/core': path.resolve('node_modules/@emotion/react'),
                'emotion-theming': path.resolve('node_modules/@emotion/react'),
            },
        },
    }),
    framework: '@storybook/react',
};
