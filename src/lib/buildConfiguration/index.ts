import { availablePlugins } from './availablePlugins';
import { type EslintConfig } from '../shared/EslintConfig';
import { getConfigForPlugins } from './getConfigForPlugins';

const buildConfiguration = (): EslintConfig => getConfigForPlugins({
  config: {
    env: {},
    extends: [],
    globals: {},
    parserOptions: {},
    plugins: [],
    rules: {},
    settings: {},
    overrides: []
  },
  plugins: availablePlugins
});

export {
  buildConfiguration
};
