import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
];