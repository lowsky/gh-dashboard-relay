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
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react'
    ],
    'ecmaFeatures': {
        'experimentalObjectRestSpread': true,
        'jsx': true
    },
    "parser": "babel-eslint",
    'parserOptions': {
        'sourceType': 'module'
    },
    'plugins': [
        'prettier',
        'graphql',
        'react'
    ],
    'rules': {
        "prettier/prettier": [
            "warn",
            {
                 "trailingComma": 'none',
                 "singleQuote": true,
                 tabWidth: 4,
                 bracketSpacing: true,
                 jsxBracketSameLine: true,
                 printWidth: 160
             }
        ],
        'react/prop-types': 0, // fix these later
        'react/display-name': 0, // fix these later, see
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md

        "graphql/template-strings": [
            2, {
                // Import default settings for your GraphQL client. Supported values:
                // 'apollo', 'relay', 'lokka'
                env: 'relay',
                // Import your schema JSON here
                schemaJson: require('./data/schema.json')
                // tagName is set for you to Relay.QL ...
            }
        ],
        'no-undef': 1,
        'no-console': 0,
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
