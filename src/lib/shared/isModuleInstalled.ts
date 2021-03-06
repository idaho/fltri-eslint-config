const isModuleInstalled = (moduleToCheck: string): boolean => {
  try {
    require.resolve(moduleToCheck);
  } catch {
    return false;
  }

  return true;
};

export {
  isModuleInstalled
};
