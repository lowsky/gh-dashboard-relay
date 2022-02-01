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
    addons: ['@storybook/addon-essentials', '@chakra-ui/storybook-addon', 'storybook-addon-next-router'],
    framework: '@storybook/react',
};
