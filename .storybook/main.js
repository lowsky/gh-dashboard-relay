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
    }),
    framework: '@storybook/react',
};
