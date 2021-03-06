import { EslintConfig } from '../shared/EslintConfig';
import { getBetterStyledComponents } from '../plugins/betterStyledComponents';
import { getDefaults } from '../plugins/defaults';
import { getExtended } from '../plugins/extended';
import { getJest } from '../plugins/jest';
import { getJson } from '../plugins/json';
import { getMocha } from '../plugins/mocha';
import { getRadar } from '../plugins/radar';
import { getReact } from '../plugins/react';
import { getTypescript } from '../plugins/typescript';
import { getUnicorn } from '../plugins/unicorn';
import { Plugin } from './Plugin';

const getConfigForPlugin = ({ config, plugin }: { config: EslintConfig; plugin: Plugin }): EslintConfig => {
  switch (plugin) {
    case 'betterStyledComponents': {
      return getBetterStyledComponents(config);
    }
    case 'mocha': {
      return getMocha(config);
    }
    case 'jest': {
      return getJest(config);
    }
    case 'json': {
      return getJson(config);
    }
    case 'radar': {
      return getRadar(config);
    }
    case 'react': {
      return getReact(config);
    }
    case 'unicorn': {
      return getUnicorn(config);
    }
    case 'defaults': {
      return getDefaults(config);
    }
    case 'extended': {
      return getExtended(config);
    }
    case 'typescript': {
      return getTypescript(config);
    }
    default: {
      return config;
    }
  }
};

export {
  getConfigForPlugin
};
