module.exports = {
    extends: ['next', 'prettier', 'plugin:storybook/recommended', 'plugin:sonarjs/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['@graphql-eslint', 'prettier', 'sonarjs'],
    overrides: [
        { files: ['*.ts*'], processor: '@graphql-eslint/graphql' },
        {
            files: ['*.graphql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                '@graphql-eslint/description-style': 'warn',
                '@graphql-eslint/require-description': 'off',
                '@graphql-eslint/strict-id-in-types': 'off',
                '@graphql-eslint/naming-convention': 'warn',
            },
            parserOptions: {
                schema: './schema/schema.graphql',
            },
            extends: 'plugin:@graphql-eslint/schema-recommended',
        },
    ],
    rules: {
        'import/no-anonymous-default-export': 'off',
        'no-undef': 1,
        'no-console': 0,
    },
};
