# eslint-config-react
This package provides Codica's .eslintrc as an extensible shared config.

## Usage

## eslint-config-react

### Install the config via `npm`

```bash
npm install @codica/eslint-config-react --save-dev
```

### or via `yarn`

```bash
yarn add -D @codica/eslint-config-react
```

### Extend our config in your `.eslintrc` file:

```json
{
  "extends": ["@codica/eslint-config-react"]
}
```

Our config based on [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) including some rewrites for ES6+ and React with [config-prettier](https://github.com/prettier/eslint-config-prettier) onboard. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

To be sure, that you're using correct version of each package, you can list them by the command:

```bash
npm info "eslint-config-codica@latest" peerDependencies
```
## License

eslint-config-codica is Copyright © 2015-2021 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
