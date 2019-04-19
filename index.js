module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    'arrow-parens': [2, 'as-needed'],
    camelcase: 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': [0, 'never'],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-param-reassign': 'warn',
    'no-bitwise': ['warn', { allow: ['^'] }],
    'no-shadow': 'warn',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'prefer-promise-reject-errors': 'off',
    'prettier/prettier': 'error',
    quotes: 'warn',
    'quote-props': [
      'warn',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],
    'react/destructuring-assignment': [1, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 'warn',
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'react/require-default-props': ['warn'],
    'react/prefer-stateless-function': 'warn',
    'react/style-prop-object': 'warn',
  },
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalDecorators: true,
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
};
