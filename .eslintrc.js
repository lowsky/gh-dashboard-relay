// In a file called .eslintrc.js
module.exports = {
    "parser": "babel-eslint",
    "rules": {
        "graphql/template-strings": [
            2, {
// Import default settings for your GraphQL client. Supported values:
// 'apollo', 'relay', 'lokka'
                env: 'relay',
// Import your schema JSON here
                schemaJson: require('./data/schema.json')
// tagName is set for you to Relay.QL
            }
        ]
    },
    plugins: [
        'graphql'
    ]
};
