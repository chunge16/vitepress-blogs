import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { processData } from '@chunge16/vitepress-blogs-theme/config';
import {
  siteDescription,
  siteHead,
  siteThemeConfig,
  siteTitle,
} from './config/site.js';

export default defineConfig({
  cleanUrls: true,
  title: siteTitle,
  description: siteDescription,
  head: siteHead,
  themeConfig: siteThemeConfig,
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
