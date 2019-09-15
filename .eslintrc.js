module.exports = {
    extends: [
        'eslint-config-react-app',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier/react',
        'prettier'
    ],
    settings: {
        "react": {
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
        }
    },
    plugins: ['graphql', 'react', 'prettier'],
    rules: {
        'react/prop-types': 1,
        'prettier/prettier': 1,
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
