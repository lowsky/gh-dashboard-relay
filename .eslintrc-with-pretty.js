const baseConfig = require('./.eslintrc.js');

const mergedRules = Object.assign({}, baseConfig.rules, {
    'prettier/prettier': [
        'error',
        {
            trailingComma: 'es5',
            singleQuote: true,
            tabWidth: 4,
            bracketSpacing: true,
            jsxBracketSameLine: true,
            printWidth: 160,
        },
    ],
});

const mergedPlugins = baseConfig.plugins.concat(['prettier']);

// Turns off all rules that are unnecessary or might conflict with prettier
const mergedExtends = baseConfig.extends.concat(['prettier', 'prettier/react']);

const mergedConfig = Object.assign({}, baseConfig, {
    extends: mergedExtends,
    plugins: mergedPlugins,
    rules: mergedRules,
});

module.exports = mergedConfig;
