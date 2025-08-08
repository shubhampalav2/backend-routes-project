import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // Next.js recommended rules
  nextPlugin.configs['core-web-vitals'],

  // Your overrides
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      semi: ["error", "always"],      // Require semicolons
      quotes: ["error", "single"]     // Enforce single quotes
    }
  }
];