import { type Linter } from "eslint";
import { configBase } from "./config-base";
import { configTesting } from "./config-testing";
import { configTypescript } from "./config-typescript";
import { configReact } from "./config-react";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier.
 *
 * It makes use of the recommended settings of each plugin, and extends with extra configuration not present
 * on the recommended preset.
 *
 * Used plugins / configs:
 * - [x] Eslint - {@link https://eslint.org/docs/latest/rules/}
 * - [x] Typescript (Eslint) - {@link https://www.npmjs.com/package/@typescript-eslint/eslint-plugin}
 * - [x] Workspaces - {@link https://www.npmjs.com/package/eslint-plugin-workspaces}
 * - [x] TSDoc - {@link https://www.npmjs.com/package/eslint-plugin-tsdoc}
 * - [x] React - {@link https://www.npmjs.com/package/eslint-plugin-react}
 * - [x] React Hooks - {@link https://www.npmjs.com/package/eslint-plugin-react-hooks}
 * - [x] React Refresh - {@link https://www.npmjs.com/package/eslint-plugin-react-refresh}
 * - [x] Imports - {@link https://www.npmjs.com/package/eslint-plugin-import}
 * - [ ] Import Helpers {@link https://www.npmjs.com/package/eslint-plugin-import-helpers}
 * - [x] Prettier - {@link https://www.npmjs.com/package/eslint-plugin-prettier}
 * - [ ] Unicorn - {@link https://www.npmjs.com/package/eslint-plugin-unicorn}
 * - [x] Etc - {@link https://www.npmjs.com/package/eslint-plugin-etc}
 * - [x] Jest - {@link https://www.npmjs.com/package/eslint-plugin-jest}
 * - [x] jsx-a11y - {@link https://www.npmjs.com/package/eslint-plugin-jsx-a11y}
 * - [x] Eslint Comments - {@link https://www.npmjs.com/package/eslint-plugin-eslint-comments}
 * - [ ] Stylistic - {@link https://www.npmjs.com/package/@stylistic/eslint-plugin}
 */

const config: Linter.Config = {
  ...configBase,
  overrides: [configTesting, configTypescript, configReact],
  ignorePatterns: ["**/dist/**", "**/node_modules/*", "**/tmp/**"],
};

module.exports = config;

export default config;
