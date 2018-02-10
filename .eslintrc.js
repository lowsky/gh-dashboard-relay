module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: false,
    },
    globals: {
        process: true,
        __dirname: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    plugins: ['graphql', 'react', 'prettier'],
    rules: {
        'graphql/template-strings': [
            2,
            {
                // Import default settings for your GraphQL client. Supported values:
                // 'apollo', 'relay', 'lokka'
                env: 'relay',
                // Import your schema JSON here
                schemaJson: require('./src/relay/data/schema.json'),
                // tagName is set for you to Relay.QL ...
            },
        ],
        'no-undef': 1,
        'no-console': 0,
    },
};
