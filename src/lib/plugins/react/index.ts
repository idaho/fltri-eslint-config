import { EslintConfig } from '../../shared/EslintConfig';
import { isModuleInstalled } from '../../shared/isModuleInstalled';
import { plugins } from './plugins';
import { rules } from './rules';
import { settings } from './settings';

const getReact = (config: EslintConfig): EslintConfig => {
  const isInstalled = isModuleInstalled('react');

  if (!isInstalled) {
    return config;
  }

  return {
    ...config,
    rules: {
      ...config.rules,
      ...rules
    },
    plugins: [
      ...config.plugins,
      ...plugins
    ],
    settings: {
      ...config.settings,
      ...settings
    }
  };
};

export {
  getReact
};

