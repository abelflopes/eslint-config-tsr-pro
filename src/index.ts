import type { Linter } from "eslint";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier
 */

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:workspaces/recommended",
  ],
  rules: {
    "tsdoc/syntax": "warn",
    // Sync with linters, formatters, git and editor configs
    // prevent git changes caused from contributors using different OS's
    "linebreak-style": ["error", "unix"],
    // Sync with linters, formatters and editor configs
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.test.ts*"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
    {
      files: ["**/*.ts*"],
      plugins: ["eslint-plugin-tsdoc"],
      extends: [
        "xo",
        "xo/browser",
        "xo-react",
        "xo-typescript",
        "ts-important-stuff",
        "ts-react-important-stuff",
        "standard-with-typescript",
        "plugin:etc/recommended",
        "plugin:unicorn/recommended",
      ],
      rules: {
        /** Conflicting rules between eslint and prettier */
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/quotes": ["error", "double"],
        "comma-dangle": ["error", "only-multiline"],
        "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
      },
    },
  ],
  ignorePatterns: ["dist"],
};

export default config;

module.exports = config;
