import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/node_modules',
            '**/coverage',
            '**/public',
            '**/build',
            '!**/.storybook',
            '**/storybook-static/',
            'src/relay/__generated__/',
            'cypress/support/',
            '**/eval-reg-suit/',
            '**/stuff/',
            '**/stories',
            '**/out_publish',
            '.yarn',
            // TEMP:
            // minor, outdated files, only configuration:
            '.prettierrc.js',
            'next.config.js',
            'jest.config.js',
            // TEMP
        ],
    },
    ...ts.configs.recommended,
    {
        // temporary until code get changed
        rules: { '@typescript-eslint/no-explicit-any': 'off' },
    }, {
        // TEMP: temporary until code get changed
        rules: {
            // e.g.  If you want a type meaning "any value", you probably want `unknown` instead
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-wrapper-object-types': 'warn',
            '@typescript-eslint/no-unused-vars': 'off'
        },
    },
    prettierConfigRecommended,
    {
        // TEMP: Some outdated, not properly formatted sources exist
        rules: {
            'prettier/prettier': 0,
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            'import/no-anonymous-default-export': 'off',
            'no-undef': 1,
            'no-console': 0,
        },
    },
];
