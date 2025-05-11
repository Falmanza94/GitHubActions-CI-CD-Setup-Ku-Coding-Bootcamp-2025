module.exports = async () => {
  const tsConfig = await import('./cypress.config.mts');
  return tsConfig.default;
};
