module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 0,
    'import/prefer-default-export': 'off',
    'ordered-imports': 0,
    'object-literal-sort-keys': 0,
    'member-ordering': 0,
    align: 0,
    'comma-dangle': ['error', 'never'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-line-length': [0],
    'max-len': 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
