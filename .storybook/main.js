module.exports = {
    stories: ['../src/**/*.story.@(js|mdx)'],
    presets: [
        'storybook-addon-deps/preset-explorer',
        'storybook-addon-deps/preset',
        '@storybook/preset-create-react-app',
    ],
    addons: [
        '@storybook/addon-docs',
    ],
};
