import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './schema.graphql',
    // see https://the-guild.dev/graphql/codegen/docs/guides/react-vue:
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        'app/apollo/__gen__/possibleTypes.ts': {
            // required to handle fragments with unions
            // see https://www.apollographql.com/docs/react/data/fragments#generating-possibletypes-with-graphql-codegen
            plugins: ['fragment-matcher'],
            config: {
                useExplicitTyping: true,
            },
        },
        'app/apollo/__gen__/': {
            overwrite: true,
            preset: 'client',
            presetConfig: {
                // codegen's masking is incompatible with apollo with preset-client:
                // https://www.apollographql.com/docs/react/data/fragments#with-the-client-preset
                // disables the incompatible GraphQL Codegen fragment masking feature:
                fragmentMasking: false,
            },
            config: {
                //Note: Apollo Client users can still use
                nonOptionalTypename: true,
                skipTypeNameForRoot: true,

                // re-enable types?? https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#nonOptionalTypename
                // no effect
                ///nonOptionalTypename: true,

                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#skiptypename
                //strictScalars: false,

                // defaultScalarType
                //defaultScalarType: 'any',

                // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#scalars
                /*
                scalars: {
                    //Unknown scalar type Base64String
                    // not used in this project
                    Base64String: 'string',
                    BigInt: 'number',
                },
                */

                // need to add when fragmentMasking is disabled:
                // https://www.apollographql.com/docs/react/data/fragments#with-the-client-preset
                customDirectives: {
                    apolloUnmask: true,
                },
                inlineFragmentTypes: 'mask',
            },
            documents: [
                'app/apollo/**/*.tsx',
                'app/apollo/**/*.graphql',
                'apollo/**/*.tsx',
                'apollo/*.tsx',
                'apollo/**/*.graphql',
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
