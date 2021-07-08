module.exports = {
  extends: [
    'airbnb',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier/react',
  ],
  plugins: ['security', 'react', 'unused-imports'],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        'tabWidth': 2,
        'useTabs': false,
        'semi': false,
        'singleQuote': true,
        'trailingComma': 'none'
      },
    ],
    'security/detect-object-injection': 'off',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'no-param-reassign': ['error', { 'props': false }],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '{react,next,next/**,gatsby}', group: 'builtin', position: 'before', parserOptions: { 'matchBase': true } },
          {
            pattern: '@material-ui/**',
            group: 'external',
            position: 'after'
          },
          // Components and templates
          {
            pattern: '~/{components,pages,views,containers}/**',
            group: 'external',
            position: 'after'
          },
          // 
          {
            pattern: '~/{hooks,contexts,state,services,utils,validation,schemas,utilities}/**',
            group: 'external',
            position: 'after'
          },
          // Assets and static data
          {
            pattern: '~/{assets,static,styles,theme,i18n,data,constants}/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/named': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'no-nested-ternary': 'off',
    'jsx-a11y/alt-text': 'warn',
    'button-has-type': 'off',
    camelcase: 'off',

    // React
    'react/forbid-prop-types': [
      'warn',
      { forbid: ['any'], checkContextTypes: true, checkChildContextTypes: true },
    ],
    'react/destructuring-assignment': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': false }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off'
  }
}
