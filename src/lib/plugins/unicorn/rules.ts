const rules = {
  'unicorn/better-regex': [ 'error', { sortCharacterClasses: true }],
  'unicorn/catch-error-name': [ 'error', { name: 'ex', ignore: [ '^ex([A-Z0-9].*)?$' ]}],
  'unicorn/consistent-destructuring': 'error',
  'unicorn/consistent-function-scoping': 'error',
  'unicorn/custom-error-definition': 'off',
  'unicorn/empty-brace-spaces': 'off',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/expiring-todo-comments': [ 'error', {
    ignoreDatesOnPullRequests: false,
    terms: [ 'todo' ],
    allowWarningComments: false
  }],
  'unicorn/explicit-length-check': [ 'error', { 'non-zero': 'greater-than' }],
  'unicorn/filename-case': [ 'error', {
    cases: {
      camelCase: true,
      pascalCase: true,
      kebabCase: false,
      snakeCase: false
    },
    ignore: [
      'next-env.d.ts'
    ]
  }],
  'unicorn/import-index': [ 'error', { ignoreImports: false }],
  'unicorn/import-style': [ 'error', {
    styles: {
      crypto: { unassigned: false, default: true, namespace: false, named: false },
      fs: { unassigned: false, default: true, namespace: false, named: false },
      path: { unassigned: false, default: true, namespace: false, named: false },
      stream: { unassigned: false, default: false, namespace: false, named: true },
      url: { unassigned: false, default: false, namespace: false, named: true },
      util: { unassigned: false, default: false, namespace: false, named: true }
    },
    extendDefaultStyles: false,
    checkImport: true,
    checkDynamicImport: true,
    checkExportFrom: true,
    checkRequire: true
  }],
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/no-array-callback-reference': 'error',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-lonely-if': 'error',
  'unicorn/no-nested-ternary': 'error',
  'unicorn/no-new-array': 'error',

  // The unicorn/no-new-buffer rule does the same thing as ESLint's built-in
  // no-buffer-constructor rule.
  'unicorn/no-new-buffer': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-object-as-default-parameter': 'error',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/no-unsafe-regex': 'off',
  'unicorn/no-unused-properties': 'off',
  'unicorn/no-useless-undefined': 'error',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/numeric-separators-style': [ 'error', {
    hexadecimal: { minimumDigits: 0, groupLength: 2 },
    binary: { minimumDigits: 0, groupLength: 4 },
    octal: { minimumDigits: 0, groupLength: 4 },
    number: { minimumDigits: 0, groupLength: 3 }
  }],
  'unicorn/prefer-add-event-listener': 'off',
  'unicorn/prefer-array-find': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-array-index-of': 'error',
  'unicorn/prefer-array-some': 'error',
  'unicorn/prefer-date-now': 'error',
  'unicorn/prefer-default-parameters': 'error',
  'unicorn/prefer-dom-node-append': 'off',
  'unicorn/prefer-dom-node-dataset': 'error',
  'unicorn/prefer-dom-node-remove': 'off',
  'unicorn/prefer-dom-node-text-content': 'off',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-keyboard-event-key': 'error',
  'unicorn/prefer-math-trunc': 'error',
  'unicorn/prefer-modern-dom-apis': 'off',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-optional-catch-binding': 'error',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-reflect-apply': 'error',
  'unicorn/prefer-regexp-test': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-spread': 'error',

  // TODO[2021-11-01] This should be 'error', unfortunately `replaceAll` is only
  //                  available in Node.js 15.x, so we have to wait until 16 LTS
  //                  to be able to enable this rule.
  'unicorn/prefer-string-replace-all': 'off',
  'unicorn/prefer-string-slice': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-string-trim-start-end': 'error',

  // This rule is turned off since it not only applies to assignments, but to
  // expressions using await/throw/yield as well. We have opened an issue to try
  // to remedy this: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1079
  'unicorn/prefer-ternary': 'off',
  'unicorn/prefer-type-error': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/string-content': 'off',
  'unicorn/throw-new-error': 'error'
};

export {
  rules
};
