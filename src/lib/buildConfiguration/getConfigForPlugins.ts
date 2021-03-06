import { EslintConfig } from '../shared/EslintConfig';
import { getConfigForPlugin } from './getConfigForPlugin';
import { Plugin } from './Plugin';

const getConfigForPlugins = ({
  config,
  plugins
}: {
  config: EslintConfig;
  plugins: Plugin[];
}): EslintConfig =>
  plugins.reduce((
    newConfig: EslintConfig, plugin: Plugin
  ): EslintConfig => getConfigForPlugin({ config: newConfig, plugin }),
  config);

export {
  getConfigForPlugins
};
