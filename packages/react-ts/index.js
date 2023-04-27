module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:security/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'security', 'react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
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
    'no-unused-vars': 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '{react,next,next/**,gatsby}', group: 'builtin', position: 'before' },
          {
            pattern: '@mui/**',
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
            pattern: '~/{hooks,contexts,state,services,utils,validation}/**',
            group: 'external',
            position: 'after'
          },
          // Assets and static data
          {
            pattern: '~/{assets,static,styles,theme,i18n,data}/**',
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
    'no-nested-ternary': 'off',
    'button-has-type': 'off',
    camelcase: 'off',

    // Typescript
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
          object: false
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      }
    ],

    // React
    'react/destructuring-assignment': 'warn',
    'react/no-array-index-key': 'warn',
    // 'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': false }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}