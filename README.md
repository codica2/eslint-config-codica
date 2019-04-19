# eslint-config-codica

This package provides Codica's .eslintrc as an extensible shared config.

## Usage

## eslint-config-codica

### Install the config via `npm`

```bash
  npm install eslint-config-codica --save-dev
```

### or via `yarn`

```bash
  yarn add -D eslint-config-codica
```

### Extend our config in your `.eslintrc` file:

```json
{
  "extends": ["codica"]
}
```

Our config based on [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) including some rewrites for ES6+ and React with [config-prettier](https://github.com/prettier/eslint-config-prettier) onboard. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

To be sure, that you're using correct version of each package, you can list them by the command:

```bash
npm info "eslint-config-codica@latest" peerDependencies
```

If you don't need a `React` and `Prettier` onboard - `eslint-config-codica-base` and `eslint-config-codica-react` is coming soon!

## Recommendations

### Code formatting with Prettier

This config includes `eslint-config-prettier` and `eslint-config-prettier/react`. To feel up all advantages of automatic code formatting just add [prettier](https://prettier.io) to your project.

```bash
  yarn add -D prettier
```

 and add `.prettierrc` to your project root with such a config to avoid conflicts with `airbnb` and `prettier` eslint configs.

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}

```

### Pre-commit hooks

The nice way to make your teammates or/and outstuff developers to push only valid and pretty code is to use pre-commit hooks using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

The configuration steps is next:

1. Install packages:

```bash
  yarn add -D husky lint-staged
```

2. Add some configuration to `rc` files or to `package.json` directly:

```json
{
  ...
  "scripts": {
    ...
    "lint:write": "./node_modules/.bin/eslint --debug . --fix",
    "prettier": "./node_modules/.bin/prettier --write ./**/*.js"
  },
  "lint-staged": {
    "*.(js|jsx)": [
      "yarn lint:write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

3. You are beautiful! Next time you'll try to commit something, husky will hook up your commit and run `eslint` to validate all the new code!

## License

eslint-config-codica is Copyright © 2015-2019 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
