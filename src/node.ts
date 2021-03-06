import { buildConfiguration } from './lib/buildConfiguration';

const {
  env,
  globals,
  parserOptions,
  plugins,
  rules,
  settings,
  overrides
} = buildConfiguration();

export {
  env,
  globals,
  parserOptions,
  plugins,
  rules,
  settings,
  overrides
};
