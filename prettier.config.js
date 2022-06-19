module.exports = {
  tabWidth: 2,
  printWidth: 120,
  endOfLine: 'lf',
  trailingComma: 'none',
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
      options: {
        singleQuote: true
      }
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      options: {
        arrowParens: 'avoid'
      }
    }
  ]
};