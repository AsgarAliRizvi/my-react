/* eslint-disable import/no-anonymous-default-export */
import eslintConfig from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
        },
    },
    eslintConfig,
];
