/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    bracketSpacing: true,
    singleQuote: true,
    bracketSameLine: true,
    printWidth: 120,
    overrides: [
        {
            files: ['*.json', '*.yml', '*.yaml', '.html'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
