<div align="center">

[![Release](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/release.yml/badge.svg)](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/release.yml)
&nbsp;
[![Validate](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/validate.yml/badge.svg)](https://github.com/abelflopes/eslint-config-tsr-pro/actions/workflows/validate.yml)

<br />

# ESlint Config TSR Pro

<br />

Professional grade eslint configuration targeted for typescript & react projects

</div>

<br />

## Overview

An ESLint configuration package designed to provide a consistent and performant code linting
setup for JavaScript and TypeScript projects, with or without React. 

It extends popular ESLint configurations, incorporates rules to prevent conflicts with Prettier,
and includes environment settings for browser, Node.js, and ECMAScript 2021. 

This package aims to streamline your development workflow by maintaining code quality and ensuring a consistent coding style across your projects.

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