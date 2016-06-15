module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': false
    },
    'globals': {
        'process': true,
        '__dirname': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'ecmaFeatures': {
        'experimentalObjectRestSpread': true,
        'jsx': true
    },
    "parser": "babel-eslint",
    'parserOptions': {
        'sourceType': 'module'
    },
    'plugins': [
        'graphql',
        'react'
    ],
    'rules': {
        "graphql/template-strings": [
            'error', {
// Import default settings for your GraphQL client. Supported values:
// 'apollo', 'relay', 'lokka'
                env: 'relay',
// Import your schema JSON here
                schemaJson: require('./data/schema.json')
// tagName is set for you to Relay.QL
            }
        ],
        'no-undef': 1,
        'no-console': 1,
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
