import { EslintConfig } from '../../shared/EslintConfig';
import { plugins } from './plugins';
import { rules } from './rules';

const getUnicorn = (config: EslintConfig): EslintConfig => ({
  ...config,
  rules: {
    ...config.rules,
    ...rules
  },
  plugins: [
    ...config.plugins,
    ...plugins
  ]
});

export {
  getUnicorn
};
