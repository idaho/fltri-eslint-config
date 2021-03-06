import { EslintConfig } from '../../shared/EslintConfig';
import { extending } from './extends';
import { plugins } from './plugins';

const getRadar = (config: EslintConfig): EslintConfig => ({
  ...config,
  extends: [
    ...config.extends,
    ...extending
  ],
  plugins: [
    ...config.plugins,
    ...plugins
  ]
});

export {
  getRadar
};
