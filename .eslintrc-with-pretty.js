const baseConfig = require('./.eslintrc.js');

const mergedRules = Object.assign({}, baseConfig.rules, {
    "prettier/prettier": [
        "warn",
        {
            trailingComma: 'none',
            singleQuote: true,
            tabWidth: 4,
            bracketSpacing: true,
            jsxBracketSameLine: true,
            printWidth: 160
        }
    ]
});
const mergedPlugins = baseConfig.plugins.concat([
    'prettier',
]);
const mergedExtends = baseConfig.extends.concat([
    'prettier',
    'prettier/react'
]);

const mergedConfig = Object.assign({}, baseConfig, {
    'extends': mergedExtends,
    'plugins': mergedPlugins,
    'mergedRules': mergedRules
});

module.exports = mergedConfig;

