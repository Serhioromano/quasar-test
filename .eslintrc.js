const { resolve } = require('path');
module.exports = {
    root: true,
    parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },

    env: {
        browser: true,
    },

    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
        // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
        // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        // https://github.com/prettier/eslint-config-prettier#installation
        // usage with Prettier, provided by 'eslint-config-prettier'.
        // 'prettier',
    ],

    plugins: [
        // required to apply rules which need type information
        '@typescript-eslint',

        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        'vue',

        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier has not been included as plugin to avoid performance impact
        // add it as an extension for your IDE
    ],

    globals: {
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
    },

    // add your custom rules here
    rules: {
        'prefer-promise-reject-errors': 'off',

        // TypeScript
        quotes: ['warn', 'double', { avoidEscape: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
};
