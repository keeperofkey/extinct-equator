import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://example.com',
  vite: {
    ssr: {
    noExternal: ['three', 'troika-three-text']
  }
  },
  integrations: [mdx(), sitemap(), svelte()]
});