// cypress.config.js
export default async function () {
  const config = await import('./cypress.config.mts');
  return config.default;
}
