module.exports = {
    stories: ['../stories/**/*.stories.js'],
    addons: [
        '@storybook/preset-create-react-app',
        // LATER '@storybook/addon-storysource',
        'storybook-addon-jsx',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-links',
    ],
};
