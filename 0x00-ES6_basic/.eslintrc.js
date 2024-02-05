module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false, // Disable ESLint's use of the babel.config.js file
  },
  rules: {
    // Add your project-specific ESLint rules here
  },
};
