<div align="center">

[![Release](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/release.yml/badge.svg)](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/release.yml)
&nbsp;
[![Validate](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/validate.yml/badge.svg)](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/validate.yml)

<br />

# ESlint Config TSR Pro

<br />

Professional grade Eslint configuration targeted for typescript & react projects

</div>

<br />

## Overview

An ESLint configuration package designed to provide a consistent and performant code linting
setup for JavaScript and TypeScript projects, with or without React. 

It extends popular ESLint configurations, incorporates rules to prevent conflicts with Prettier,
and includes environment settings for browser, Node.js, and ECMAScript 2021. 

This package aims to streamline your development workflow by maintaining code quality and ensuring a consistent coding style across your projects.

It makes use of the recommended settings of each plugin, and extends with extra configuration not present on the recommended preset.

Used plugins / configs:
- [x] [Eslint](https://eslint.org/docs/latest/rules/)
- [x] [Typescript (Eslint)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [x] [Workspaces](https://www.npmjs.com/package/eslint-plugin-workspaces)
- [x] [TSDoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)
- [x] [React](https://www.npmjs.com/package/eslint-plugin-react)
- [x] [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [x] [React Refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [x] [Imports](https://www.npmjs.com/package/eslint-plugin-import)
- [ ] [Import Helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers)
- [x] [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [ ] [Unicorn (TODO)](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [x] [Etc](https://www.npmjs.com/package/eslint-plugin-etc)
- [x] [Jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [x] [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [x] [Eslint Comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [ ] [Stylistic (TODO)](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [ ] [N (TODO)](https://www.npmjs.com/package/eslint-plugin-n)
- [ ] [Compat (TODO)](https://github.com/amilajack/eslint-plugin-compat)
- [ ] [Promise](https://github.com/eslint-community/eslint-plugin-promise)

To achieve maximum consistency, use along with [prettier-config-pro](https://www.npmjs.com/package/@abelflopes/prettier-config-pro);

## Installation

You can install this config via npm or yarn:

```bash
npm install @abelflopes/eslint-config-tsr-pro --save-dev
# or
yarn add @abelflopes/eslint-config-tsr-pro --dev
```

## Usage

To use this configuration in your project, create an ESLint configuration file
(e.g., .eslintrc.js) and extend `@abelflopes/eslint-config-tsr-pro`:

```js
// .eslintrc.js
module.exports = {
  extends: '@abelflopes/eslint-config-tsr-pro',
  // Add any project-specific overrides or rules here
};
```

## Contributing

If you encounter any issues with this ESLint configuration or have suggestions for improvements,
please visit the GitHub repository and open an issue or pull request.
Check also the [development](./docs/DEVELOPMENT.md) docs.