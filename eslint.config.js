import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

const baseGlobals = {
  ...globals.browser,
  ...globals.node,
};

export default [
  {
    ignores: [
      '.github/**',
      '.husky/**',
      'vitepress-blogs-theme/**',
      'docs/.vitepress/dist/**',
      'docs/.vitepress/cache/**',
    ],
  },
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: baseGlobals,
    },
  },
  ...pluginVue.configs['flat/essential'].map((config) => ({
    ...config,
    files: ['**/*.vue'],
    languageOptions: {
      ...config.languageOptions,
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: baseGlobals,
    },
  })),
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: baseGlobals,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      semi: ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/custom-event-name-casing': 'off',
      'vue/attributes-order': 'off',
      'vue/one-component-per-file': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
];
