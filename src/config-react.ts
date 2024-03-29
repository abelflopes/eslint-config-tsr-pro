import { type Linter } from "eslint";

export const configReact = {
  files: ["**/*.{tsx,jsx}"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "react-refresh", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    // React
    "react/boolean-prop-naming": "warn",
    "react/function-component-definition": ["warn", { namedComponents: "arrow-function" }],
    "react/hook-use-state": ["error", { allowDestructuredState: true }],
    "react/iframe-missing-sandbox": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-handler-names": "warn",
    "react/jsx-fragments": "warn",
    "react/jsx-max-depth": ["warn", { max: 4 }],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-leaked-render": "warn",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: "last",
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        locale: "auto",
      },
    ],
    "react/jsx-tag-spacing": "warn",
    "react/jsx-wrap-multilines": "warn",
    "react/no-array-index-key": "error",
    "react/no-danger": "warn",
    "react/no-invalid-html-attribute": "warn",
    "react/no-multi-comp": "error",
    "react/no-namespace": "warn",
    "react/no-object-type-as-default-prop": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unstable-nested-components": "error",
    "react/prefer-read-only-props": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": "warn",
    "react/void-dom-elements-no-children": "error",
    // React Refresh
    "react-refresh/only-export-components": "warn",
    // A11y
    "jsx-a11y/anchor-ambiguous-text": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "jsx-a11y/lang": "warn",
    "jsx-a11y/no-aria-hidden-on-focusable": "warn",
    "jsx-a11y/prefer-tag-over-role": "warn",
  },
} satisfies Linter.ConfigOverride;
