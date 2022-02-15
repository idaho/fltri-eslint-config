import { env } from './env';
import { type EslintConfig } from '../../shared/EslintConfig';
import { isModuleInstalled } from '../../shared/isModuleInstalled';
import { plugins } from './plugins';
import { rules } from './rules';

const getJest = (config: EslintConfig): EslintConfig => {
  const isInstalled = isModuleInstalled('jest');

  if (!isInstalled) {
    return config;
  }

  return {
    ...config,
    env: {
      ...config.env,
      ...env
    },
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
  getJest
};
