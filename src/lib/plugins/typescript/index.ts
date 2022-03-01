import { type EslintConfig } from '../../shared/EslintConfig';
import { files } from './files';
import { globals } from './globals';
import { isModuleInstalled } from '../../shared/isModuleInstalled';
import { parser } from './parser';
import { parserOptions } from './parserOptions';
import { plugins } from './plugins';
import { rules } from './rules';

const getTypescript = (config: EslintConfig): EslintConfig => {
  const isInstalled = isModuleInstalled('typescript');

  if (!isInstalled) {
    return config;
  }

  const { overrides } = config;

  return {
    ...config,
    overrides: [
      ...overrides,
      {
        files,
        parser,
        parserOptions: {
          ...config.parserOptions,
          ...parserOptions
        },
        globals: {
          ...config.globals,
          ...globals
        },
        plugins: [
          ...config.plugins,
          ...plugins
        ],
        rules
      }
    ]
  };
};

export {
  getTypescript
};
