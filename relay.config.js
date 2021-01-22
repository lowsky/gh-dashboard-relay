// relay.config.js
module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: './src/relay',
    language: 'typescript',
    schema: './src/relay/data/schema.graphql',
    exclude: ['**/node_modules/**', '**/__mocks__/**'],
};
