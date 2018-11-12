module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: false,
    },
    root: true,
    globals: {
        process: true,
        console: true,
        __dirname: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ['graphql', 'prettier'],
    rules: {
        'prettier/prettier': 1,
        'no-undef': 1,
        'no-console': 0,
    },
};
