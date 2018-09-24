module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/require-default-props': [
            'error',
            {
                forbidDefaultForRequired: true,
            },
        ],
        'global-require': 'error',
    },
    globals: {
        require: true,
        module: true,
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            version: '15.0', // React version, default to the latest React stable release
            flowVersion: '0.53', // Flow version
        },
        propWrapperFunctions: ['forbidExtraProps'], // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    },
};
