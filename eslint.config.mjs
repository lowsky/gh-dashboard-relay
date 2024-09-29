import prettier from "eslint-plugin-prettier";
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
    "prettier"
), {
    plugins: {
        prettier,
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
}];
