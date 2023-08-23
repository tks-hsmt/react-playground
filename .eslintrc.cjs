module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // Typescript用のルール
    'plugin:@typescript-eslint/recommended',
    // React用のルール
    'plugin:react/recommended',
    // アクセシビリティのルール
    'plugin:jsx-a11y/strict',
    // Hooks APIのルール
    'plugin:react-hooks/recommended',
    // storybookのルール
    'plugin:storybook/recommended',
    // prettierのルール
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', '@typescript-eslint', 'testing-library', 'jest-dom', 'import'],
  rules: {
    // 型情報しか使ってないimportをimport typeに強制
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    // var句を使った変数宣言を非許可
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'react/require-default-props': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 'off',
    // importの自動整列
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }]
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react']
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: []
    }
  },
  ignorePatterns: ['**/*.js']
};
