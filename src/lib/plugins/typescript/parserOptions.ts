import path from 'node:path';

const parserOptions = {
  sourceType: 'module',
  project: path.join('.', 'tsconfig.json')
};

export {
  parserOptions
};
