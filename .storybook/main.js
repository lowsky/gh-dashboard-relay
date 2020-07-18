module.exports = {
    stories: ['../src/**/*.story.js'],
    addons: [
        '@storybook/preset-create-react-app',
        'storybook-addon-deps',
        'storybook-chromatic',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-links',
    ],
};
