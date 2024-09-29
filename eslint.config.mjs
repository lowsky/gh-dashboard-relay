
import parser from "@graphql-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import sonarjs from "eslint-plugin-sonarjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/coverage",
        "**/public",
        "**/build",
        "!**/.storybook",
        "**/storybook-static/",
        "src/relay/__generated__/",
        "cypress/support/",
        "**/eval-reg-suit/",
        "**/stuff/",
        "**/stories",
        "**/out_publish",
    ],
}, ...compat.extends(
    "next",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:sonarjs/recommended",
), {
    plugins: {
        "@graphql-eslint": graphqlEslint,
        prettier,
        sonarjs,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "import/no-anonymous-default-export": "off",
        "no-undef": 1,
        "no-console": 0,
    },
}, {
    files: ["**/*.ts*"],
    processor: "@graphql-eslint/graphql",
}, ...compat.extends("plugin:@graphql-eslint/schema-recommended").map(config => ({
    ...config,
    files: ["**/*.graphql"],
})), {
    files: ["**/*.graphql"],

    plugins: {
        "@graphql-eslint": graphqlEslint,
    },

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            schema: "./schema/schema.graphql",
        },
    },

    rules: {
        "@graphql-eslint/description-style": "warn",
        "@graphql-eslint/require-description": "off",
        "@graphql-eslint/strict-id-in-types": "off",
        "@graphql-eslint/naming-convention": "warn",
    },
}];
