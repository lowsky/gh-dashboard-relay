module.exports = {
    extends: ['next', 'prettier', 'plugin:storybook/recommended','plugin:sonarjs/recommended'],
    settings: {
        react: {
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
    plugins: ['graphql', 'prettier', 'sonarjs'],

    rules: {
        'import/no-anonymous-default-export': 'off',
        /*
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
         */
        'no-undef': 1,
        'no-console': 0,
    },
};
