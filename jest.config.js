'use strict';

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: [ 'js', 'ts', 'tsx', 'json' ],
  testPathIgnorePatterns: [ './node_modules/' ],
  rootDir: './',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  }
};
