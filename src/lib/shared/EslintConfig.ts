type EslintExtends = string[];
type EslintPlugins = string[];
type EslintEnv = Record<string, boolean>;
type EslintGlobal = Record<string, boolean>;

interface EslintConfig {
  parserOptions: Record<string, any>;
  env: EslintEnv;
  extends: EslintExtends;
  globals: EslintGlobal;
  plugins: EslintPlugins;
  settings: Record<string, any>;
  rules: Record<string, any>;
  overrides: Record<string, any>[];
}

export type {
  EslintConfig,
  EslintEnv,
  EslintExtends,
  EslintGlobal,
  EslintPlugins
};
