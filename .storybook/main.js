module.exports = {
    stories: [
        '../stories/*.story.@(js|jsx|ts|tsx|mdx)',
        '../components/*.story.@(js|jsx|ts|tsx|mdx)',
        '../lib/*.story.@(js|jsx|ts|tsx|mdx)',
        '../pages/*.story.@(js|jsx|ts|tsx|mdx)',
        '../queries/*.story.@(js|jsx|ts|tsx|mdx)',
        '../relay/*.story.@(js|jsx|ts|tsx|mdx)',
        '../restinpeace/*.story.@(js|jsx|ts|tsx|mdx)',
        '../container/*.story.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: ['@storybook/addon-essentials'],
};
