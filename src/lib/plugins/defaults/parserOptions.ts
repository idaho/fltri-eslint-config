const parserOptions = {
  sourceType: 'script',

  // eslint-disable-next-line unicorn/numeric-separators-style
  ecmaVersion: 2021,
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: false,
    jsx: true
  }
};

export {
  parserOptions
};
