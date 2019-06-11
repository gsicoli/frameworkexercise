module.exports = {
    env: {
      es6: true,
      mocha: true,
    },
    extends: [
      'airbnb-base',
    ],
    plugins: [
      'import',
      'async-await',
      'promise'
    ],
    globals: {
      GIT_COMMIT: true,
      GIT_BRANCH: true,
    },
    settings: {
    },
    parserOptions: {
    },
    rules: {
      'max-len': ['error', {
        code: 160,
      }],
      'no-console': 0,
      'no-plusplus': ['off'],
      'prefer-template': 0,
      'global-require': 0,
      'object-curly-newline': ['off'],
      'prefer-promise-reject-errors': 0,
      'dot-notation': [
        'error',
        {
          allowPattern: '^[A-Z]+(_[A-Z]+)+$',
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true
        },
      ],
    },
  };
