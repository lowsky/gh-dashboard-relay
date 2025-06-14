import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './schema.graphql',
    // see https://the-guild.dev/graphql/codegen/docs/guides/react-vue:
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        'app/apollo/__gen__/possibleTypes.ts': {
            // required to handle fragments with unions
            plugins: ['fragment-matcher'],
            config: {
                useExplicitTyping: true,
            },
        },
        'app/apollo/__gen__/': {
            overwrite: true,
            preset: 'client',
            presetConfig: {
                // disables the incompatible GraphQL Codegen fragment masking feature:
                fragmentMasking: true,
            },
            documents: [
                'app/apollo/**/*.tsx',
                'app/apollo/**/*.graphql',
                'apollo/**/*.tsx',
                'apollo/**/*.graphql',
                '!**/*.story*',
                '!**/__generated_/**',
                '!src',
            ],
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier --write'],
    },
};

export default config;
