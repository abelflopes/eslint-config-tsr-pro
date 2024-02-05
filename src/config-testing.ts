import type { Linter } from "eslint";

export const configTesting = {
  files: ["**/*.{test,spec}.*"],
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  rules: {
    "jest/consistent-test-it": "error",
    "jest/max-expects": "error",
    "jest/max-nested-describe": ["error", { max: 3 }],
    "jest/no-conditional-in-test": "error",
    "jest/no-confusing-set-timeout": "warn",
    "jest/no-duplicate-hooks": "error",
    "jest/no-large-snapshots": "warn",
    "jest/no-test-return-statement": "error",
    "jest/no-untyped-mock-factory": "error",
    "jest/prefer-called-with": "warn",
    "jest/prefer-comparison-matcher": "warn",
    "jest/prefer-each": "warn",
    "jest/prefer-equality-matcher": "warn",
    "jest/prefer-hooks-in-order": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-lowercase-title": "warn",
    "jest/prefer-mock-promise-shorthand": "warn",
    "jest/prefer-snapshot-hint": "warn",
    "jest/prefer-spy-on": "warn",
    "jest/prefer-strict-equal": "warn",
    "jest/prefer-to-be": "warn",
    "jest/prefer-to-contain": "warn",
    "jest/prefer-to-have-length": "warn",
    "jest/prefer-todo": "warn",
    "jest/require-hook": "error",
    "jest/require-to-throw-message": "warn",
    "jest/require-top-level-describe": "error",
    "jest/unbound-method": "warn",
  },
} satisfies Linter.ConfigOverride;
