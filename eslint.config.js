// @ts-check
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";

// noinspection JSUnusedGlobalSymbols
export default tseslint.config(
    eslint.configs.recommended,
    reactRecommended,
    reactJsxRuntime,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: ["./tsconfig.json", "./tsconfig.node.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@stylistic": stylistic,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh
        },
        settings: {
            "react": {
                "version": "detect"
            }
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true },],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/max-len": ["error", 120],
            "eqeqeq": ["error", "smart"],
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    "checksVoidReturn": false
                }
            ],
        }
    },
    {
        ignores: ["dist/"]
    }
);
