module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
	'json-format'
  ],
  extends: [
    'prettier',
	'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
    rules: {
    'prettier/prettier': "error",
    'semi': 0
  },
};
