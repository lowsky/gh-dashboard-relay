module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/preset-create-react-app',
        // LATER '@storybook/addon-storysource',
        'storybook-addon-jsx',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-links',
    ],
};
