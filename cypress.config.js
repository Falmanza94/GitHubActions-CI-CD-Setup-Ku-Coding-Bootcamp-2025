// cypress.config.js
export default async function () {
  const tsConfig = await import('./cypress.config.mts');
  return tsConfig.default;
}
