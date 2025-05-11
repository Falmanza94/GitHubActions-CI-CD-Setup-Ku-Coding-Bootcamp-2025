import { defineConfig } from 'cypress';
import { mergeConfig } from 'vite';
import viteBaseConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: async () => mergeConfig(viteBaseConfig, {}),
    },
  },
});
