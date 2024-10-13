import { readFileSync, writeFileSync } from 'node:fs';

function packageSchema(schemaSourcePath, schemaTargetPath) {
    const schema = readFileSync(schemaSourcePath, { encoding: 'utf-8' });
    writeFileSync(
        schemaTargetPath,
        `// Auto-generated, instead of using a webpack-loader...
// Just wrapping schema/schema.graphql
export const typeDefs = \`
${schema}
\`;
`
    );

    console.log(`Wrapped schema from ${schemaSourcePath} into ${schemaTargetPath} . Use import it via: 
    import { typeDefs } from './${schemaTargetPath}' // adapt path!`);
}

// loads schema and writes new one wrapped to be loaded without any bundler config.
packageSchema('schema/schema.graphql', 'lib/localSchema.ts');
