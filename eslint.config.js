import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Formatting rules
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // Max 1 blank line, none at start/end
      'no-trailing-spaces': 'error', // No trailing spaces
      'eol-last': ['error', 'always'], // Newline at end of file
      'no-multi-spaces': 'error', // No multiple spaces
      'comma-dangle': ['error', 'always-multiline'], // Trailing commas in multiline
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'double', { avoidEscape: true }], // Double quotes
      'indent': ['error', 2], // 2 space indentation
      'object-curly-spacing': ['error', 'always'], // Spaces in object literals
      'array-bracket-spacing': ['error', 'never'], // No spaces in array brackets
      'comma-spacing': ['error', { before: false, after: true }], // Space after comma
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Space after colon in objects
      'space-before-blocks': 'error', // Space before blocks
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      'space-in-parens': ['error', 'never'], // No spaces in parentheses
      'space-infix-ops': 'error', // Spaces around operators
      'space-unary-ops': 'error', // Spaces for unary operators
      'brace-style': ['error', '1tbs'], // One true brace style
      'curly': ['error', 'all'], // Always use curly braces
      'arrow-spacing': 'error', // Spaces around arrow functions
      'keyword-spacing': 'error', // Spaces around keywords
    },
  },
])
