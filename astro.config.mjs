// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://reliabilityops.dev',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(),
    react() // React is still needed for some components
  ],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  
  // Server rendering for dynamic content
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
  }),
});