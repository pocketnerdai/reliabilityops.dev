// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://reliabilityops.dev',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(),
    react(),
    sanity({
      projectId: '1xy15psx',
      dataset: 'production',
      // Optional: configure the Sanity Studio route
      studioBasePath: '/studio',
      useCdn: true, // Use CDN for faster content delivery
      apiVersion: '2024-01-24', // Use current date for latest API features
    })
  ],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  
  // Server rendering for Sanity Studio
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
  }),
});