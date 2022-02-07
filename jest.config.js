module.exports = {
    verbose: true,
    transform: { '\\.[jt]sx?$': 'babel-jest' },
    coveragePathIgnorePatterns: ['node_modules', '.storybook', 'relay/__generated__/', '.story.js'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
};
