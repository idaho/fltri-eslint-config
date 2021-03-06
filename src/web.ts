import {
  globals,
  env as nodeEnv,
  overrides,
  parserOptions,
  plugins,
  rules,
  settings
} from './node';

const env = {
  ...nodeEnv,
  browser: true,
  commonjs: true,
  serviceworker: true,
  'shared-node-browser': true,
  worker: true
};

export {
  env,
  globals,
  parserOptions,
  plugins,
  rules,
  settings,
  overrides
};
