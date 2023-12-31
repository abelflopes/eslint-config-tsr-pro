// TODO: review

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {},
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks", "import-helpers", "prettier", "tsdoc"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
    "@typescript-eslint/no-unsafe-assignment": ["off"],
    "tsdoc/syntax": ["off"],
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
    "arrow-body-style": [2, "as-needed"],
    "prettier/prettier": [
      2,
      {
        endOfLine: "lf",
      },
    ],
    "linebreak-style": ["error", "unix"],
    "import-helpers/order-imports": [
      1,
      {
        groups: ["/^react/"],
      },
    ],
    "sort-imports": [
      1,
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    "eqeqeq": [2],
    "no-console": [2],
    "require-await": [2],
    "vars-on-top": [2],
    "react/prop-types": ["off"],
    "react/display-name": ["off"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: 2,
        when: "multiline",
      },
    ],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/self-closing-comp": [2],
    "react-hooks/rules-of-hooks": [2],
    "react-hooks/exhaustive-deps": [2],
    "@typescript-eslint/consistent-type-assertions": [
      2,
      {
        assertionStyle: "never",
      },
    ],
    "@typescript-eslint/no-unused-vars": [2],
    "@typescript-eslint/no-unsafe-return": [2],
    "@typescript-eslint/no-floating-promises": [2],
    "@typescript-eslint/no-namespace": ["off"],
    "@typescript-eslint/no-unsafe-call": [2],
    "@typescript-eslint/no-unsafe-member-access": [2],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/ban-ts-comment": ["error"],
    "@typescript-eslint/ban-types": ["error"],
    "no-array-constructor": ["off"],
    "@typescript-eslint/no-array-constructor": ["error"],
    "no-empty-function": ["off"],
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "no-extra-semi": ["off"],
    "@typescript-eslint/no-extra-semi": ["error"],
    "@typescript-eslint/no-inferrable-types": ["error"],
    "no-loss-of-precision": ["off"],
    "@typescript-eslint/no-loss-of-precision": ["error"],
    "@typescript-eslint/no-misused-new": ["error"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-this-alias": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
    "no-unused-vars": ["off"],
    "@typescript-eslint/prefer-as-const": ["error"],
    "@typescript-eslint/prefer-namespace-keyword": ["error"],
    "@typescript-eslint/triple-slash-reference": ["error"],
    "react/jsx-key": [2],
    "react/jsx-no-comment-textnodes": [2],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-target-blank": [2],
    "react/jsx-no-undef": [2],
    "react/jsx-uses-react": [2],
    "react/jsx-uses-vars": [2],
    "react/no-children-prop": [2],
    "react/no-danger-with-children": [2],
    "react/no-deprecated": [2],
    "react/no-direct-mutation-state": [2],
    "react/no-find-dom-node": [2],
    "react/no-is-mounted": [2],
    "react/no-render-return-value": [2],
    "react/no-string-refs": [2],
    "react/no-unescaped-entities": [2],
    "react/no-unknown-property": [2],
    "react/no-unsafe": [0],
    "react/react-in-jsx-scope": [2],
    "react/require-render-return": [2],
    "constructor-super": ["error"],
    "for-direction": ["error"],
    "getter-return": ["error"],
    "no-async-promise-executor": ["error"],
    "no-case-declarations": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-const-assign": ["error"],
    "no-constant-condition": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-delete-var": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty": ["error"],
    "no-empty-character-class": ["error"],
    "no-empty-pattern": ["error"],
    "no-ex-assign": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-fallthrough": ["error"],
    "no-func-assign": ["error"],
    "no-global-assign": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-misleading-character-class": ["error"],
    "no-mixed-spaces-and-tabs": ["error"],
    "no-new-symbol": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-obj-calls": ["error"],
    "no-octal": ["error"],
    "no-prototype-builtins": ["error"],
    "no-redeclare": ["error"],
    "no-regex-spaces": ["error"],
    "no-self-assign": ["error"],
    "no-setter-return": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-this-before-super": ["error"],
    "no-undef": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unreachable": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error"],
    "no-unsafe-optional-chaining": ["error"],
    "no-unused-labels": ["error"],
    "no-useless-backreference": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-escape": ["error"],
    "no-with": ["error"],
    "require-yield": ["error"],
    "use-isnan": ["error"],
    "valid-typeof": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/dist/**"],
};
