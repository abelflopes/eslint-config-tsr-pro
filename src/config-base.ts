/* eslint-disable etc/no-commented-out-code -- TODO: to confirm ETC plugin rules */

import { type Linter } from "eslint";

export const configBase = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    project: true,
    ecmaVersion: 2015,
    sourceType: "module",
  },
  plugins: ["prettier", "import", "eslint-comments"],
  extends: [
    "eslint:recommended",
    "plugin:workspaces/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:etc/recommended",
  ],
  rules: {
    // Eslint Problems
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",
    // Eslint - Suggestions
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    "class-methods-use-this": "warn",
    "complexity": ["warn", 10],
    "consistent-this": "warn",
    "curly": ["error", "multi-or-nest", "consistent"],
    "default-case": "warn",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "grouped-accessor-pairs": "error",
    "init-declarations": "warn",
    "max-classes-per-file": "error",
    "max-depth": ["warn", 4],
    "max-lines": ["warn", 200],
    "max-lines-per-function": ["warn", 150],
    "max-nested-callbacks": ["warn", 5],
    "max-params": "error",
    "new-cap": "warn",
    "no-alert": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "warn",
    "no-multi-assign": "warn",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-object-constructor": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-exports": "error",
    "no-script-url": "error",
    "no-throw-literal": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "warn",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": ["error", { allowAsStatement: true }],
    "object-shorthand": ["warn", "properties"],
    "operator-assignment": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-object-has-own": "warn",
    "prefer-object-spread": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "radix": ["error", "as-needed"],
    // "require-await": "error", // FIXME: require await or return promise
    "require-unicode-regexp": "warn",
    "sort-imports": [
      "warn",
      { ignoreDeclarationSort: true, ignoreMemberSort: true, allowSeparatedGroups: true },
    ],
    "symbol-description": "error",
    "vars-on-top": "error",
    "yoda": "warn",
    // Eslint - Layout Formatting
    "line-comment-position": ["warn", { position: "above" }],
    // Prettier
    "prettier/prettier": "warn",
    // Import
    "import/export": "warn",
    "import/no-deprecated": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "warn",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-unused-modules": "warn",
    "import/named": "warn",
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "warn",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "warn",
    "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
    "import/exports-last": "warn",
    "import/first": "error",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
    // Comments
    "eslint-comments/no-unused-disable": "warn",
    "eslint-comments/require-description": ["warn", { ignore: ["eslint-enable"] }],
    // Etc
    "etc/no-commented-out-code": "warn",
    "etc/no-const-enum": "warn",
    "etc/no-enum": "warn",
    // "etc/no-misused-generics": "error", // FIXME: https://github.com/cartant/eslint-plugin-etc/issues/64
    // "etc/prefer-interface": [ // FIXME: allow functions to be type alias
    //   "warn",
    //   {
    //     allowLocal: true,
    //   },
    // ],
    "etc/throw-error": "error",
    "etc/underscore-internal": "warn",
    // Stylistic / TODO: check deprecated
    "max-len": [
      2,
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "export",
      },
      {
        blankLine: "always",
        prev: "export",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "try",
      },
    ],
  },
} satisfies Linter.Config;

/* eslint-enable */
