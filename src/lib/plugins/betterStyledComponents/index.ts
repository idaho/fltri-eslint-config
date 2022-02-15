import { type EslintConfig } from '../../shared/EslintConfig';
import { isModuleInstalled } from '../../shared/isModuleInstalled';
import { plugins } from './plugins';
import { rules } from './rules';

const getBetterStyledComponents = (config: EslintConfig): EslintConfig => {
  const isInstalled = isModuleInstalled('styled-components');

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
    ]
  };
};

export {
  getBetterStyledComponents
};
