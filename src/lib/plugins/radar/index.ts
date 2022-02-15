import { type EslintConfig } from '../../shared/EslintConfig';
import { extending } from './extends';
import { isModuleInstalled } from '../../shared/isModuleInstalled';
import { plugins } from './plugins';

const getRadar = (config: EslintConfig): EslintConfig => {
  const isInstalled = isModuleInstalled('eslint-plugin-radar');

  if (!isInstalled) {
    return config;
  }

  return {
    ...config,
    extends: [
      ...config.extends,
      ...extending
    ],
    plugins: [
      ...config.plugins,
      ...plugins
    ]
  };
};

export {
  getRadar
};
