import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

import { fixupPluginRules } from '@eslint/compat';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

/** @type {import('typescript-eslint').Config} */
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
            '.next/**',
            '.yarn',
            // TEMP:
            // minor, outdated files, only configuration:
            '.prettierrc.js',
            'next.config.js',
            'jest.config.js',
            // TEMP
        ],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@next/next': fixupPluginRules(nextPlugin),
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },

    js.configs.recommended,
    ...ts.configs.recommended,
    {
        // TEMP: until all sources got fixed
        rules: { '@typescript-eslint/no-explicit-any': 'off' },
    },
    {
        // TEMP: until sources got changed
        rules: {
            // e.g.  If you want a type meaning "any value", you probably want `unknown` instead
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-wrapper-object-types': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    prettierConfigRecommended,
    {
        // TEMP: Some outdated, not properly formatted sources exist
        rules: {
            'prettier/prettier': 1,
        },
    },
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: fixupPluginRules(reactPlugin),
        },
        settings: { react: { version: 'detect' } },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            // TEMP: code needs adoptions:
            'react/react-in-jsx-scope': 0,
            'react/prop-types': 0,
        },
    },
    {
        // TEMP code will need adoptions:
        rules: {
            'import/no-anonymous-default-export': 'off',
            'no-undef': 1,
            'no-console': 0,
        },
    },
    {
        plugins: { 'react-hooks': fixupPluginRules(reactHooks) },
    },
    {
        // Hint: files IS required
        files: ['**/*.{js,jsx,tsx}'],
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
