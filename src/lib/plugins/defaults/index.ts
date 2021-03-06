import { env } from './env';
import { EslintConfig } from '../../shared/EslintConfig';
import { parserOptions } from './parserOptions';
import { rules } from './rules';

const getDefaults = (config: EslintConfig): EslintConfig => ({
  ...config,
  env: {
    ...config.env,
    ...env
  },
  parserOptions: {
    ...config.parserOptions,
    ...parserOptions
  },
  rules: {
    ...config.rules,
    ...rules
  }
});

export {
  getDefaults
};
